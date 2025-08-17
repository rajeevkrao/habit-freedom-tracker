import { error } from '@sveltejs/kit';
import { habits } from '$lib/habits';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
    const habit = habits.find((h) => h.slug === params.slug);

    if (!habit) {
        throw error(404, 'Habit not found');
    }

    return {
        habit
    };
}
