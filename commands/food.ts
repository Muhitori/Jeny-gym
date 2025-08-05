import { InlineKeyboard } from 'grammy';
import { MyContext } from '../types';

/**
 * Handler for the food callback query
 */
export const handleFood = async (ctx: MyContext): Promise<void> => {
    await ctx.answerCallbackQuery();

    const keyboard = new InlineKeyboard()
        .text('➕ Добавить план питания', 'food_add_plan')
        .row()
        .text('🆕 Создать план питания', 'food_create_plan')
        .row()
        .text('📋 Мои планы питания', 'food_my_plans')
        .row()
        .text('⬅️ Назад', 'back_to_main');

    await ctx.reply('🍎 *Раздел питания*\n\nВыберите действие:', {
        parse_mode: 'Markdown',
        reply_markup: keyboard,
    });
};

/**
 * Handler for adding a food plan
 */
export const handleFoodAddPlan = async (ctx: MyContext): Promise<void> => {
    await ctx.answerCallbackQuery();
    await ctx.reply(
        '➕ *Добавить план питания*\n\nЗдесь вы можете добавить готовый план питания из библиотеки.',
        {
            parse_mode: 'Markdown',
        }
    );
};

/**
 * Handler for creating a food plan
 */
export const handleFoodCreatePlan = async (ctx: MyContext): Promise<void> => {
    await ctx.answerCallbackQuery();
    await ctx.reply(
        '🆕 *Создать план питания*\n\nЗдесь вы можете создать свой собственный план питания.',
        {
            parse_mode: 'Markdown',
        }
    );
};

/**
 * Handler for viewing my food plans
 */
export const handleFoodMyPlans = async (ctx: MyContext): Promise<void> => {
    await ctx.answerCallbackQuery();
    await ctx.reply(
        '📋 *Мои планы питания*\n\nЗдесь отображаются ваши сохраненные планы питания.',
        {
            parse_mode: 'Markdown',
        }
    );
};
