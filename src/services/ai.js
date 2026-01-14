/**
 * AI Mentor Service
 * Integration with Google Gemini API for technical mentoring
 */

// Fixed mentor system prompt - core behavior definition
const MENTOR_SYSTEM_PROMPT = `Você é um mentor técnico experiente especializado em Game Development.
Suas áreas de expertise: Unity, Unreal Engine, Blender e mentoria geral de desenvolvimento de jogos.

SEMPRE responda neste formato:

**1. Diagnóstico Rápido**
Avaliação breve da situação apresentada.

**2. Problema Central**
O principal desafio ou questão a ser resolvida.

**3. Direção Recomendada**
Orientação estratégica e abordagem sugerida.

**4. Próximo Passo Imediato**
Uma ação concreta e específica para executar agora.

Diretrizes:
- Seja direto e prático
- Evite conselhos genéricos
- Considere o contexto e histórico do usuário
- Foque em decisões, clareza e passos acionáveis
- Responda sempre em português brasileiro`;

/**
 * Build context message from user's recent notes
 * @param {Array} recentNotes - Array of recent notes
 * @returns {string} Context string
 */
function buildContextFromNotes(recentNotes) {
    if (!recentNotes || recentNotes.length === 0) {
        return '';
    }

    const notesContext = recentNotes.map(note =>
        `[${note.type}] ${note.category}: ${note.title}\n${note.content.substring(0, 200)}${note.content.length > 200 ? '...' : ''}`
    ).join('\n\n');

    return `\n\n---\nCONTEXTO - Notas recentes do usuário:\n${notesContext}`;
}

/**
 * Get AI mentor feedback for a note
 * @param {Object} currentNote - Current note being worked on
 * @param {Array} recentNotes - Recent notes for context
 * @returns {Promise<string>} AI response
 */
export async function getMentorFeedback(currentNote, recentNotes = []) {
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

    if (!apiKey || apiKey === 'your_gemini_api_key_here') {
        throw new Error('Chave da API Gemini não configurada. Configure VITE_GEMINI_API_KEY no arquivo .env');
    }

    // Build the user message with current note
    const currentNoteText = `
**Categoria:** ${currentNote.category}
**Tipo:** ${currentNote.type}
**Título:** ${currentNote.title}

**Conteúdo:**
${currentNote.content}

**Tags:** ${currentNote.tags?.join(', ') || 'Nenhuma'}
`;

    // Add context from recent notes
    const context = buildContextFromNotes(recentNotes.filter(n => n.id !== currentNote.id));

    const fullPrompt = currentNoteText + context;

    try {
        const response = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    contents: [
                        {
                            role: 'user',
                            parts: [{ text: MENTOR_SYSTEM_PROMPT }]
                        },
                        {
                            role: 'model',
                            parts: [{ text: 'Entendido. Estou pronto para atuar como seu mentor técnico em Game Development, seguindo o formato estruturado de resposta.' }]
                        },
                        {
                            role: 'user',
                            parts: [{ text: fullPrompt }]
                        }
                    ],
                    generationConfig: {
                        temperature: 0.7,
                        topK: 40,
                        topP: 0.95,
                        maxOutputTokens: 1024
                    }
                })
            }
        );

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.error?.message || 'Erro ao comunicar com a API');
        }

        const data = await response.json();

        // Extract text from response
        const aiText = data.candidates?.[0]?.content?.parts?.[0]?.text;

        if (!aiText) {
            throw new Error('Resposta vazia da IA');
        }

        return aiText;
    } catch (error) {
        console.error('AI Service Error:', error);
        throw error;
    }
}

/**
 * Parse AI response into structured sections
 * @param {string} response - Raw AI response text
 * @returns {Object} Parsed sections
 */
export function parseAIResponse(response) {
    const sections = {
        diagnosis: '',
        problem: '',
        direction: '',
        nextStep: ''
    };

    // Try to extract sections using markdown headers
    const diagnosisMatch = response.match(/\*\*1\. Diagnóstico Rápido\*\*\n([\s\S]*?)(?=\*\*2\.|$)/i);
    const problemMatch = response.match(/\*\*2\. Problema Central\*\*\n([\s\S]*?)(?=\*\*3\.|$)/i);
    const directionMatch = response.match(/\*\*3\. Direção Recomendada\*\*\n([\s\S]*?)(?=\*\*4\.|$)/i);
    const nextStepMatch = response.match(/\*\*4\. Próximo Passo Imediato\*\*\n([\s\S]*?)$/i);

    if (diagnosisMatch) sections.diagnosis = diagnosisMatch[1].trim();
    if (problemMatch) sections.problem = problemMatch[1].trim();
    if (directionMatch) sections.direction = directionMatch[1].trim();
    if (nextStepMatch) sections.nextStep = nextStepMatch[1].trim();

    // If parsing failed, return raw response
    if (!sections.diagnosis && !sections.problem) {
        sections.raw = response;
    }

    return sections;
}
