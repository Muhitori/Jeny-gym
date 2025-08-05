// This file serves as an index for all command handlers
// You can add your command handlers in separate files and export them here

// Export command handlers
export { handleStart } from './start';
export { handleHelp } from './help';
export {
    handleTraining,
    handleTrainingAddProgram,
    handleTrainingCreateProgram,
    handleTrainingMyPrograms,
} from './training';
export { handleFood, handleFoodAddPlan, handleFoodCreatePlan, handleFoodMyPlans } from './food';

// Back to main menu handler
export { handleBackToMain } from './start';
