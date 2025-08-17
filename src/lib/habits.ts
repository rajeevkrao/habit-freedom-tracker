export const habits = [
    {
        name: 'Smoking / Vaping',
        slug: 'smoking-vaping',
        questions: [
            {
                text: 'When do you crave smoking the most?',
                type: 'select',
                options: ['Morning', 'After meals', 'Stress', 'Social situations', 'Late night']
            },
            { text: 'How many cigarettes do you smoke in a day?', type: 'number' },
            { text: 'Have you ever tried to quit before?', type: 'radio', options: ['Yes', 'No'] },
            {
                text: 'What stopped you?',
                type: 'textarea',
                dependsOn: 2, // Index of the question it depends on
                dependsOnValue: 'Yes'
            },
            {
                text: 'What do you usually feel right before smoking?',
                type: 'select',
                options: ['Stress', 'Relaxation', 'Boredom', 'Habit', 'Craving']
            },
            { text: 'On a scale of 1–10, how strong is your motivation to quit?', type: 'range', min: 1, max: 10 }
        ]
    },
    {
        name: 'Alcohol / Drinking',
        slug: 'alcohol-drinking',
        questions: [
            { text: 'Do you drink daily, weekly, or occasionally?', type: 'select', options: ['Daily', 'Weekly', 'Occasionally'] },
            { text: 'When do you usually drink?', type: 'select', options: ['Evening', 'Weekend', 'Social events', 'When stressed'] },
            { text: 'What’s your main reason for drinking?', type: 'select', options: ['Stress relief', 'Socializing', 'Habit', 'Can’t sleep'] },
            { text: 'How many drinks do you usually have in one sitting?', type: 'number' },
            { text: 'Would you like to quit completely or cut down slowly?', type: 'select', options: ['Quit completely', 'Cut down slowly'] }
        ]
    },
    {
        name: 'Junk Food / Overeating',
        slug: 'junk-food-overeating',
        questions: [
            { text: 'What type of junk food is hardest for you to resist?', type: 'select', options: ['Chips', 'Sweets', 'Fast food', 'Fried snacks'] },
            { text: 'When do you usually eat junk?', type: 'select', options: ['Late night', 'With friends', 'Stress', 'TV time'] },
            { text: 'What’s your biggest challenge?', type: 'select', options: ['Cravings', 'Convenience', 'Boredom', 'Habit'] },
            { text: 'Do you want to reduce or completely quit?', type: 'select', options: ['Reduce', 'Completely quit'] },
            { text: 'How often do you eat junk per week?', type: 'number' }
        ]
    },
    {
        name: 'Phone / Social Media Addiction',
        slug: 'phone-social-media-addiction',
        questions: [
            { text: 'How many hours/day do you spend on your phone?', type: 'number' },
            { text: 'Which app takes most of your time?', type: 'select', options: ['Instagram', 'YouTube', 'WhatsApp', 'Games', 'Other'] },
            { text: 'When do you use your phone the most?', type: 'select', options: ['Morning', 'Night', 'Boredom', 'Work breaks'] },
            { text: 'What’s the main trigger?', type: 'select', options: ['Boredom', 'Stress', 'Habit', 'Notifications'] },
            { text: 'Do you want to limit or quit certain apps completely?', type: 'select', options: ['Limit', 'Quit certain apps completely'] }
        ]
    },
    {
        name: 'Procrastination / Productivity',
        slug: 'procrastination-productivity',
        questions: [
            { text: 'What tasks do you procrastinate the most?', type: 'select', options: ['Work', 'Study', 'Exercise', 'Household'] },
            { text: 'Why do you procrastinate?', type: 'select', options: ['Too big', 'Boring', 'Fear of failure', 'No deadline'] },
            { text: 'What distracts you most?', type: 'select', options: ['Phone', 'Social media', 'TV', 'Overthinking'] },
            { text: 'When do you feel most productive?', type: 'select', options: ['Morning', 'Afternoon', 'Night'] },
            { text: 'Do you prefer working in short bursts or long deep work?', type: 'select', options: ['Short bursts', 'Long deep work'] }
        ]
    }
];
