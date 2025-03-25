export interface Message {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

export interface ChatCompletionChoice {
  message: {
    content: string | null;
  };
}

export interface ChatCompletion {
  choices: ChatCompletionChoice[];
}

export function mapDeepseekChatCompletion(entity: ChatCompletion): string[] {
  return entity.choices
    .map(entity => entity.message.content)
    .filter((v): v is string => v !== null);
} 