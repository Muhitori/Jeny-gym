import { InlineKeyboard } from 'grammy';
import { MyContext } from '../types';

/**
 * Handler for the /start command
 * This is the first command users typically send when starting a conversation with the bot
 */
export const handleStart = async (ctx: MyContext): Promise<void> => {
    const keyboard = new InlineKeyboard().text('🏋️‍♂️ Тренировка', 'training').text('🍎 Еда', 'food');

    await ctx.reply(ctx.t('start'), {
        parse_mode: 'Markdown',
        reply_markup: keyboard,
    });
};

/**
 * Handler for going back to main menu
 */
export const handleBackToMain = async (ctx: MyContext): Promise<void> => {
    await ctx.answerCallbackQuery();
    const keyboard = new InlineKeyboard().text('🏋️‍♂️ Тренировка', 'training').text('🍎 Еда', 'food');

    await ctx.reply('🏠 *Главное меню*\n\nВыберите раздел:', {
        parse_mode: 'Markdown',
        reply_markup: keyboard,
    });
};
