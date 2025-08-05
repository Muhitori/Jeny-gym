import { MyContext } from '../types';

/**
 * Handler for the training callback query
 */
export const handleTraining = async (ctx: MyContext): Promise<void> => {
    await ctx.answerCallbackQuery();
    await ctx.reply(
        '🏋️‍♂️ *Раздел тренировок*\n\nЗдесь вы можете:\n• Выбрать программу тренировок\n• Отслеживать прогресс\n• Получить советы по упражнениям',
        {
            parse_mode: 'Markdown',
        }
    );
};
