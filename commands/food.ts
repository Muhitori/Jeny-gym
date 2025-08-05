import { MyContext } from '../types';

/**
 * Handler for the food callback query
 */
export const handleFood = async (ctx: MyContext): Promise<void> => {
    await ctx.answerCallbackQuery();
    await ctx.reply(
        '🍎 *Раздел питания*\n\nЗдесь вы можете:\n• Получить план питания\n• Подсчитать калории\n• Найти полезные рецепты',
        {
            parse_mode: 'Markdown',
        }
    );
};
