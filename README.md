# Starter code for CRUD App

## Client

"proxy": "http://localhost:3000",

    [X] connect to the database
    [X] will land on a visually pleasing homepage by default, which allows navigation to view all campuses and all students
    can navigate to all campuses view, and
    [X] see a list of all campuses in the database
    [X] see an informative message if no campuses exist
    [X] add a new campus
    [X] with a validated form displaying real-time error messages

    [X] can navigate to a single campus view, and
    [X] see details about a single campus, including enrolled students (if any)
    [X] see an informative message if no students are enrolled at that campus
    [X] navigate to any student’s single student view
    [X] delete the campus
    [x] edit campus information (including adding/removing students)
    [x] with a validated form displaying real-time error messages

    can navigate to all students view, and
    [X] see a list of all students in the database
    [X] see an informative message if no students exist
    [x] add a new student
    [x] with a validated form displaying real-time error messages

    can navigate to a single student view, and
    [X] see details about a single student, including the campus at which they are enrolled (if exists)
    [X] see an informative message if student is not enrolled at a campus
    [x] navigate to single campus view of the student’s enrolled campus
    [X] delete the student
    [x] edit the student’s information (including campus s/he is enrolled at)
    [x] with a validated form displaying real-time error messages


    State management (Redux)

    [X] Write a campuses sub-reducer to manage campuses in your Redux store

    [X] Write a students sub-reducer to manage students in your Redux store


    UI (React)

    [X] Write a component to display a list of all campuses (just their names and images)
    [X] Write a component to display a list of all students (just their names)

    Client-side routing (React-Router)

    [X] Display the all-campuses component when the url matches `/campuses`
    [X] Display the all-students component when the url matches `/students`
    [X] Add links to the navbar that can be used to navigate to the all-campuses view and the all-students view

    UI (React)

    [x] Write a component to display a single campus with the following information:
    [x] The campus's name, image, address and description
    [x] A list of the names of all students in that campus (or a helpful message if it doesn't have any students)
    [x] Write a component to display a single student with the following information:
    [X] The student's full name, email, image, and gpa
    [X] The name of their campus (or a helpful message if they don't have one)

    Client-side routing (React-Router)

    [X] Display the appropriate campus's info when the url matches `/campuses/:campusId`
    [X] Clicking on a campus from the all-campuses view should navigate to show that campus in the single-campus view
    [X] Display the appropriate student when the url matches `/students/:studentId`
    [X] Clicking on a student from the all-students view should navigate to show that student in the single-student view
    [X] Clicking on the name of a student in the single-campus view should navigate to show that student in the single-student view
    [x] Clicking on the name of a campus in the single-student view should navigate to show that campus in the single-campus view

    UI (React)

    [x] Write a component to display a form for editing a new campus

    [x] Display this component EITHER as part of the single-campus view, or as its own view

    [x] Submitting the form with should:

    [X] Make a request that causes the new campus to be updated in the database

    [X] Display the updates without needing to refresh the page

    [X] Write a component to display a form for editing a new student

    [X] Display this component EITHER as part of the single-student view, or as its own view

    [x] Submitting the form with a should:

    [x] Make a request that causes the new student to be updated in the database

    [x] Display the updates without needing to refresh the page

    UI (React)

    [x] In the all-campuses view, include an `X` button next to each campus

    [x] Clicking the `X` button should:

    [x] Make a request that causes that campus to be removed from database

    [x] Remove the campus from the list of campuses without needing to refresh the page

    [x] In the all-students view, include an `X` button next to each student

    [x] Clicking the `X` button should:

    [x] Make a request that causes that student to be removed from database

    [x] Remove the student from the list of students without needing to refresh the page
