@smoke @regression
  Feature: Verify Main Page submenu list

    Scenario: Verify sub menu of Admission button
      Given user on the login page
      When user mouse hover over on Admission button
      Then user should see the list of sub menu

        | Undergraduate        |
        | Discover NAU         |
        | Degree Programs      |
        | Tuition and Fees     |
        | Scholarships         |
        | International        |
        | Graduate             |
        | Apply Now            |
        | Graduate Degrees     |
        | Distance Education   |
        | International        |
        | Gulf Language School |
        | GLS Admissions       |
        | GLS Programs         |
        | GLS Students         |
        | GLS Faculty          |


    Scenario: Verify sub menu of Academics button
      Given user on the login page
      When user mouse hover over on Academics button
      Then user should see the list of Academics sub menu

        | Academics              |
        | Undergraduate Programs |
        | Graduate Programs      |
        | GLS Programs           |
        | Distance Education     |
        | Educator Certification |
        | Certificate Programs   |
        | Academic Resources     |
        | Academic Clubs         |
        | NAU Library            |
        | Faculty Members        |
        | Brochures              |
        | Academic Catalog       |
        | Academic Calendar      |
        | Student Achievement    |
        | Course Schedule        |
        | Finals Schedule        |


    Scenario: Verify sub menu of Faculty&Staff button
      Given user on the login page
      When user mouse hover over on Faculty&Staff button
      Then user should see the list of Faculty&Staff sub menu

        | Office 365         |
        | Fees and Deposits  |
        | Password Reset     |
        | IT Services        |
        | Employee Center    |
        | Human Resources    |
        | Employee Forms     |
        | Faculty Members    |
        | Employee Handbook  |
        | News and Events    |
        | Headlines          |
        | Announcements      |
        | Calendar of Events |
        | Student Workers    |



    Scenario: Verify sub menu of Campus Life button
      Given user on the login page
      When user mouse hover over on Campus Life button
      Then user should see the list of Campus Life sub menu

        | Student Services      |
        | Student Organizations |
        | Calendar of Events    |
        | NAU Athletics         |
        | Health Services       |
        | Student Organizations |
        | Residential Life      |
        | Housing               |
        | Dining at NAU         |
        | Resident’s Handbook   |
        | Fees and Deposits     |
        | Housing               |
        | Fees and Deposits     |
        | Parking & Security    |
        | Parking Enforcement   |
        | Campus Security       |
        | Emergency Guide       |
        | Campus Crime Report   |



    Scenario: Verify sub menu of About NAU button
      Given user on the login page
      When user mouse hover over on About Nau button
      Then user should see the list of About Nau sub menu

        | Office of the President    |
        | Welcome Message            |
        | Board of Trustees          |
        | Accreditation              |
        | Brochures                  |
        | Details                    |
        | NAU History                |
        | About Houston              |
        | NAU Policies               |
        | Student Achievements       |

