import { InlineKeyboard } from 'grammy';
import { MyContext } from '../types';

/**
 * Handler for the training callback query
 */
export const handleTraining = async (ctx: MyContext): Promise<void> => {
    await ctx.answerCallbackQuery();

    const keyboard = new InlineKeyboard()
        .text('➕ Добавить программу', 'training_add_program')
        .row()
        .text('🆕 Создать программу', 'training_create_program')
        .row()
        .text('📋 Мои программы', 'training_my_programs')
        .row()
        .text('⬅️ Назад', 'back_to_main');

    await ctx.reply('🏋️‍♂️ *Раздел тренировок*\n\nВыберите действие:', {
        parse_mode: 'Markdown',
        reply_markup: keyboard,
    });
};

/**
 * Handler for adding a training program
 */
export const handleTrainingAddProgram = async (ctx: MyContext): Promise<void> => {
    await ctx.answerCallbackQuery();
    await ctx.reply(
        '➕ *Добавить программу*\n\nЗдесь вы можете добавить готовую программу тренировок из библиотеки.',
        {
            parse_mode: 'Markdown',
        }
    );
};

/**
 * Handler for creating a training program
 */
export const handleTrainingCreateProgram = async (ctx: MyContext): Promise<void> => {
    await ctx.answerCallbackQuery();
    await ctx.reply(
        '🆕 *Создать программу*\n\nЗдесь вы можете создать свою собственную программу тренировок.',
        {
            parse_mode: 'Markdown',
        }
    );
};

/**
 * Handler for viewing my training programs
 */
export const handleTrainingMyPrograms = async (ctx: MyContext): Promise<void> => {
    await ctx.answerCallbackQuery();
    await ctx.reply(
        '📋 *Мои программы*\n\nЗдесь отображаются ваши сохраненные программы тренировок.',
        {
            parse_mode: 'Markdown',
        }
    );
};
