/**
 * Generic Utility Types
 *  --> https://www.typescriptlang.org/docs/handbook/utility-types.html
 */

interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date;
}

/**
 * Partial Generic Utility Type
 *      --> Make All The Properties of interface Optional
 */
function createCourseGoal(title: string, description: string, date: Date): CourseGoal {
    let courseGoal: Partial<CourseGoal> = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;

    return courseGoal as CourseGoal;
}

/**
 * Readonly Generic Utility Type
 *      --> Prevent Mutation
 */
const names: Readonly<string[]> = ['Abhishek', 'Dylan'];
names[0] = '';

