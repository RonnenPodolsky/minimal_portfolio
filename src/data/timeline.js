function differenceInMonths(date1, date2) {
    const monthDiff = date1.getMonth() - date2.getMonth();
    const yearDiff = date1.getYear() - date2.getYear();

    return monthDiff + yearDiff * 12;
}

let start = new Date("December 25, 2022");
let finish = new Date()


export default [
    {
        year: 'today',
        title: 'Software Engineer @ Byon',
        duration: `${differenceInMonths(finish, start)} Months`,
        details: "Employed as the only front-end engineer on a freelance project, working with a backend engineer and a PM. Using React and styling with CSS from scratch (no component library)."

    },
    {
        year: '2021-2022',
        title: 'Product Manager @ Aggua',
        duration: '',
        details: 'Defined product vision for a web application geared towards data teams for ETL, cataloging, and data lineage. Prioritized features and wrote detailed product specifications and user stories while collaborating with 10 engineers and a UI designer to create the MVP.'
    },
    {
        year: '2020-2021',
        title: 'B.Sc Computer Science @ HUJI',
        duration: "didn't finish, left for full-time PM role",
        details: 'Relevant coursework: Intro to CS (Python), Intro to OOP (C++), Data Structures and Algorithms, Discrete Math.        '
    }, {
        year: '2013-2018',
        title: 'PM and Analytics Lead (KABAR) @ 8200',
        duration: '',
        details: 'Best time of my life. Captain in reserve duty.'
    },
    {
        year: '2008',
        title: 'First line of code',
        duration: '',
        details: 'CS in 7th grade :)'
    },
]