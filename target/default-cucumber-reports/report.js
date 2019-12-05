$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src\\test\\resources\\features\\Apply.feature");
formatter.feature({
  "name": "Apply Now",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.scenario({
  "name": "Sign up for apply",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Office365PageStepDefinitions.user_on_theLogin_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on Apply Now button",
  "keyword": "When "
});
formatter.match({
  "location": "ApplyPageStepDefinitions.user_click_on_Apply_Now_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "page should navigate to the Apply page",
  "keyword": "Then "
});
formatter.match({
  "location": "ApplyPageStepDefinitions.page_should_navigate_to_the_Apply_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on Apply button",
  "keyword": "When "
});
formatter.match({
  "location": "ApplyPageStepDefinitions.user_click_on_Apply_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "page should navigate to the Sign Up page",
  "keyword": "Then "
});
formatter.match({
  "location": "ApplyPageStepDefinitions.page_should_navigate_to_the_Sign_Up_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters requested informations and click accept terms and click sign up button",
  "keyword": "And "
});
formatter.match({
  "location": "ApplyPageStepDefinitions.user_enters_requested_informations_and_click_accept_terms_and_click_sign_up_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user successfully sign up for the app",
  "keyword": "Then "
});
formatter.match({
  "location": "ApplyPageStepDefinitions.user_successfully_sign_up_for_the_app()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src\\test\\resources\\features\\MainPage.feature");
formatter.feature({
  "name": "Main page modulus",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.scenario({
  "name": "Verifying Main page modulus",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Office365PageStepDefinitions.user_on_theLogin_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "main logo must be \"North American University\"",
  "keyword": "Then "
});
formatter.match({
  "location": "MainPageStepDefinitions.main_logo_must_be(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "header menu names should be displayed:",
  "rows": [
    {
      "cells": [
        "Request Info"
      ]
    },
    {
      "cells": [
        "Apply Now"
      ]
    },
    {
      "cells": [
        "Athletics"
      ]
    },
    {
      "cells": [
        "365 Portal"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "MainPageStepDefinitions.header_menu_names_should_be_displayed(String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "main menu names should be displayed:",
  "rows": [
    {
      "cells": [
        "Admissions"
      ]
    },
    {
      "cells": [
        "Academics"
      ]
    },
    {
      "cells": [
        "Faculty \u0026 Staff"
      ]
    },
    {
      "cells": [
        "Campus Life"
      ]
    },
    {
      "cells": [
        "Students"
      ]
    },
    {
      "cells": [
        "About NAU"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "MainPageStepDefinitions.main_menu_names_should_be_displayed(String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src\\test\\resources\\features\\Moodle.feature");
formatter.feature({
  "name": "Moodle page",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.scenario({
  "name": "Moodle page login",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Office365PageStepDefinitions.user_on_theLogin_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on Portal button",
  "keyword": "Then "
});
formatter.match({
  "location": "Office365PageStepDefinitions.user_click_on_Portal_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see the login page",
  "keyword": "Then "
});
formatter.match({
  "location": "Office365PageStepDefinitions.user_should_see_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters valid credentials and click on login button",
  "keyword": "When "
});
formatter.match({
  "location": "Office365PageStepDefinitions.user_enters_valid_credentials_and_click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be navigated to the Office page",
  "keyword": "And "
});
formatter.match({
  "location": "Office365PageStepDefinitions.user_should_be_navigated_to_the_Office_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on Moodle NAU button",
  "keyword": "When "
});
formatter.match({
  "location": "Office365PageStepDefinitions.user_click_on_Moodle_NAU_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see Moodle main page",
  "keyword": "Then "
});
formatter.match({
  "location": "Office365PageStepDefinitions.user_should_see_Moodle_main_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see his/her name on the right top of the page",
  "keyword": "Then "
});
formatter.match({
  "location": "MoodlePageStepDefinitions.user_should_see_his_her_name_on_the_right_top_of_the_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Moodle page enrolled classes",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Office365PageStepDefinitions.user_on_theLogin_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on Portal button",
  "keyword": "Then "
});
formatter.match({
  "location": "Office365PageStepDefinitions.user_click_on_Portal_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see the login page",
  "keyword": "Then "
});
formatter.match({
  "location": "Office365PageStepDefinitions.user_should_see_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters valid credentials and click on login button",
  "keyword": "When "
});
formatter.match({
  "location": "Office365PageStepDefinitions.user_enters_valid_credentials_and_click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be navigated to the Office page",
  "keyword": "And "
});
formatter.match({
  "location": "Office365PageStepDefinitions.user_should_be_navigated_to_the_Office_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on Moodle NAU button",
  "keyword": "When "
});
formatter.match({
  "location": "Office365PageStepDefinitions.user_click_on_Moodle_NAU_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see Moodle main page",
  "keyword": "Then "
});
formatter.match({
  "location": "Office365PageStepDefinitions.user_should_see_Moodle_main_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see the course names which he/she already enrolled",
  "keyword": "And "
});
formatter.match({
  "location": "MoodlePageStepDefinitions.user_should_see_the_course_names_which_he_she_already_enrolled()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Moodle page upcoming events",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Office365PageStepDefinitions.user_on_theLogin_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on Portal button",
  "keyword": "Then "
});
formatter.match({
  "location": "Office365PageStepDefinitions.user_click_on_Portal_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see the login page",
  "keyword": "Then "
});
formatter.match({
  "location": "Office365PageStepDefinitions.user_should_see_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters valid credentials and click on login button",
  "keyword": "When "
});
formatter.match({
  "location": "Office365PageStepDefinitions.user_enters_valid_credentials_and_click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be navigated to the Office page",
  "keyword": "And "
});
formatter.match({
  "location": "Office365PageStepDefinitions.user_should_be_navigated_to_the_Office_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on Moodle NAU button",
  "keyword": "When "
});
formatter.match({
  "location": "Office365PageStepDefinitions.user_click_on_Moodle_NAU_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see Moodle main page",
  "keyword": "Then "
});
formatter.match({
  "location": "Office365PageStepDefinitions.user_should_see_Moodle_main_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see the upcoming events",
  "keyword": "Then "
});
formatter.match({
  "location": "MoodlePageStepDefinitions.user_should_see_the_upcoming_events()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Moodle page navigate course name",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Office365PageStepDefinitions.user_on_theLogin_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on Portal button",
  "keyword": "Then "
});
formatter.match({
  "location": "Office365PageStepDefinitions.user_click_on_Portal_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see the login page",
  "keyword": "Then "
});
formatter.match({
  "location": "Office365PageStepDefinitions.user_should_see_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters valid credentials and click on login button",
  "keyword": "When "
});
formatter.match({
  "location": "Office365PageStepDefinitions.user_enters_valid_credentials_and_click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be navigated to the Office page",
  "keyword": "And "
});
formatter.match({
  "location": "Office365PageStepDefinitions.user_should_be_navigated_to_the_Office_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on Moodle NAU button",
  "keyword": "When "
});
formatter.match({
  "location": "Office365PageStepDefinitions.user_click_on_Moodle_NAU_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see Moodle main page",
  "keyword": "Then "
});
formatter.match({
  "location": "Office365PageStepDefinitions.user_should_see_Moodle_main_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user mouse hover over on my courses button",
  "keyword": "And "
});
formatter.match({
  "location": "MoodlePageStepDefinitions.user_mouse_hover_over_on_my_courses_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on random course name",
  "keyword": "When "
});
formatter.match({
  "location": "MoodlePageStepDefinitions.user_click_on_random_course_name()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see the course name on the top",
  "keyword": "Then "
});
formatter.match({
  "location": "MoodlePageStepDefinitions.user_should_see_the_course_name_on_the_top()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Moodle page side menu names",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Office365PageStepDefinitions.user_on_theLogin_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on Portal button",
  "keyword": "Then "
});
formatter.match({
  "location": "Office365PageStepDefinitions.user_click_on_Portal_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see the login page",
  "keyword": "Then "
});
formatter.match({
  "location": "Office365PageStepDefinitions.user_should_see_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters valid credentials and click on login button",
  "keyword": "When "
});
formatter.match({
  "location": "Office365PageStepDefinitions.user_enters_valid_credentials_and_click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be navigated to the Office page",
  "keyword": "And "
});
formatter.match({
  "location": "Office365PageStepDefinitions.user_should_be_navigated_to_the_Office_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on Moodle NAU button",
  "keyword": "When "
});
formatter.match({
  "location": "Office365PageStepDefinitions.user_click_on_Moodle_NAU_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see Moodle main page",
  "keyword": "Then "
});
formatter.match({
  "location": "Office365PageStepDefinitions.user_should_see_Moodle_main_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see the following menu names on the right side menu",
  "rows": [
    {
      "cells": [
        "Upcoming events"
      ]
    },
    {
      "cells": [
        "Navigation"
      ]
    },
    {
      "cells": [
        "Online users"
      ]
    },
    {
      "cells": [
        "Activities"
      ]
    },
    {
      "cells": [
        "Timeline"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "Office365PageStepDefinitions.user_should_see_the_following_menu_names_on_the_right_side_menu(String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src\\test\\resources\\features\\Office365.feature");
formatter.feature({
  "name": "365 Portal",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.scenario({
  "name": "365 Portal account login",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Office365PageStepDefinitions.user_on_theLogin_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on Portal button",
  "keyword": "Then "
});
formatter.match({
  "location": "Office365PageStepDefinitions.user_click_on_Portal_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see the login page",
  "keyword": "Then "
});
formatter.match({
  "location": "Office365PageStepDefinitions.user_should_see_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters valid credentials and click on login button",
  "keyword": "When "
});
formatter.match({
  "location": "Office365PageStepDefinitions.user_enters_valid_credentials_and_click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be navigated to the Office page",
  "keyword": "And "
});
formatter.match({
  "location": "Office365PageStepDefinitions.user_should_be_navigated_to_the_Office_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on Moodle NAU button",
  "keyword": "When "
});
formatter.match({
  "location": "Office365PageStepDefinitions.user_click_on_Moodle_NAU_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see Moodle main page",
  "keyword": "Then "
});
formatter.match({
  "location": "Office365PageStepDefinitions.user_should_see_Moodle_main_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "365 Portal account login(negative)",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Office365PageStepDefinitions.user_on_theLogin_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on Portal button",
  "keyword": "Then "
});
formatter.match({
  "location": "Office365PageStepDefinitions.user_click_on_Portal_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see the login page",
  "keyword": "Then "
});
formatter.match({
  "location": "Office365PageStepDefinitions.user_should_see_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters invalid credentials and click on login button",
  "keyword": "When "
});
formatter.match({
  "location": "Office365PageStepDefinitions.user_enters_invalid_credentials_and_click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should not be navigated to the Office page",
  "keyword": "And "
});
formatter.match({
  "location": "Office365PageStepDefinitions.user_should_not_be_navigated_to_the_Office_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src\\test\\resources\\features\\SubMenuList.feature");
formatter.feature({
  "name": "Verify Main Page submenu list",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.scenario({
  "name": "Verify sub menu of Admission button",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Office365PageStepDefinitions.user_on_theLogin_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user mouse hover over on Admission button",
  "keyword": "When "
});
formatter.match({
  "location": "SubMenuListStepDefinitions.user_mouse_hover_over_on_Admission_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see the list of sub menu",
  "rows": [
    {
      "cells": [
        "Undergraduate"
      ]
    },
    {
      "cells": [
        "Discover NAU"
      ]
    },
    {
      "cells": [
        "Degree Programs"
      ]
    },
    {
      "cells": [
        "Tuition and Fees"
      ]
    },
    {
      "cells": [
        "Scholarships"
      ]
    },
    {
      "cells": [
        "International"
      ]
    },
    {
      "cells": [
        "Graduate"
      ]
    },
    {
      "cells": [
        "Apply Now"
      ]
    },
    {
      "cells": [
        "Graduate Degrees"
      ]
    },
    {
      "cells": [
        "Distance Education"
      ]
    },
    {
      "cells": [
        "International"
      ]
    },
    {
      "cells": [
        "Gulf Language School"
      ]
    },
    {
      "cells": [
        "GLS Admissions"
      ]
    },
    {
      "cells": [
        "GLS Programs"
      ]
    },
    {
      "cells": [
        "GLS Students"
      ]
    },
    {
      "cells": [
        "GLS Faculty"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SubMenuListStepDefinitions.user_should_see_the_list_of_sub_menu(String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify sub menu of Academics button",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Office365PageStepDefinitions.user_on_theLogin_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user mouse hover over on Academics button",
  "keyword": "When "
});
formatter.match({
  "location": "SubMenuListStepDefinitions.user_mouse_hover_over_on_Academics_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see the list of Academics sub menu",
  "rows": [
    {
      "cells": [
        "Academics"
      ]
    },
    {
      "cells": [
        "Undergraduate Programs"
      ]
    },
    {
      "cells": [
        "Graduate Programs"
      ]
    },
    {
      "cells": [
        "GLS Programs"
      ]
    },
    {
      "cells": [
        "Distance Education"
      ]
    },
    {
      "cells": [
        "Educator Certification"
      ]
    },
    {
      "cells": [
        "Certificate Programs"
      ]
    },
    {
      "cells": [
        "Academic Resources"
      ]
    },
    {
      "cells": [
        "Academic Clubs"
      ]
    },
    {
      "cells": [
        "NAU Library"
      ]
    },
    {
      "cells": [
        "Faculty Members"
      ]
    },
    {
      "cells": [
        "Brochures"
      ]
    },
    {
      "cells": [
        "Academic Catalog"
      ]
    },
    {
      "cells": [
        "Academic Calendar"
      ]
    },
    {
      "cells": [
        "Student Achievement"
      ]
    },
    {
      "cells": [
        "Course Schedule"
      ]
    },
    {
      "cells": [
        "Finals Schedule"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SubMenuListStepDefinitions.user_should_see_the_list_of_Academics_sub_menu(String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify sub menu of Faculty\u0026Staff button",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Office365PageStepDefinitions.user_on_theLogin_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user mouse hover over on Faculty\u0026Staff button",
  "keyword": "When "
});
formatter.match({
  "location": "SubMenuListStepDefinitions.user_mouse_hover_over_on_Faculty_Staff_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see the list of Faculty\u0026Staff sub menu",
  "rows": [
    {
      "cells": [
        "Office 365"
      ]
    },
    {
      "cells": [
        "Fees and Deposits"
      ]
    },
    {
      "cells": [
        "Password Reset"
      ]
    },
    {
      "cells": [
        "IT Services"
      ]
    },
    {
      "cells": [
        "Employee Center"
      ]
    },
    {
      "cells": [
        "Human Resources"
      ]
    },
    {
      "cells": [
        "Employee Forms"
      ]
    },
    {
      "cells": [
        "Faculty Members"
      ]
    },
    {
      "cells": [
        "Employee Handbook"
      ]
    },
    {
      "cells": [
        "News and Events"
      ]
    },
    {
      "cells": [
        "Headlines"
      ]
    },
    {
      "cells": [
        "Announcements"
      ]
    },
    {
      "cells": [
        "Calendar of Events"
      ]
    },
    {
      "cells": [
        "Student Workers"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SubMenuListStepDefinitions.user_should_see_the_list_of_Faculty_Staff_sub_menu(String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify sub menu of Campus Life button",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Office365PageStepDefinitions.user_on_theLogin_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user mouse hover over on Campus Life button",
  "keyword": "When "
});
formatter.match({
  "location": "SubMenuListStepDefinitions.user_mouse_hover_over_on_Campus_Life_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see the list of Campus Life sub menu",
  "rows": [
    {
      "cells": [
        "Student Services"
      ]
    },
    {
      "cells": [
        "Student Organizations"
      ]
    },
    {
      "cells": [
        "Calendar of Events"
      ]
    },
    {
      "cells": [
        "NAU Athletics"
      ]
    },
    {
      "cells": [
        "Health Services"
      ]
    },
    {
      "cells": [
        "Student Organizations"
      ]
    },
    {
      "cells": [
        "Residential Life"
      ]
    },
    {
      "cells": [
        "Housing"
      ]
    },
    {
      "cells": [
        "Dining at NAU"
      ]
    },
    {
      "cells": [
        "Resident’s Handbook"
      ]
    },
    {
      "cells": [
        "Fees and Deposits"
      ]
    },
    {
      "cells": [
        "Housing"
      ]
    },
    {
      "cells": [
        "Fees and Deposits"
      ]
    },
    {
      "cells": [
        "Parking \u0026 Security"
      ]
    },
    {
      "cells": [
        "Parking Enforcement"
      ]
    },
    {
      "cells": [
        "Campus Security"
      ]
    },
    {
      "cells": [
        "Emergency Guide"
      ]
    },
    {
      "cells": [
        "Campus Crime Report"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SubMenuListStepDefinitions.user_should_see_the_list_of_Campus_Life_sub_menu(String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify sub menu of About NAU button",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Office365PageStepDefinitions.user_on_theLogin_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user mouse hover over on About Nau button",
  "keyword": "When "
});
formatter.match({
  "location": "SubMenuListStepDefinitions.user_mouse_hover_over_on_About_Nau_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see the list of About Nau sub menu",
  "rows": [
    {
      "cells": [
        "Office of the President"
      ]
    },
    {
      "cells": [
        "Welcome Message"
      ]
    },
    {
      "cells": [
        "Board of Trustees"
      ]
    },
    {
      "cells": [
        "Accreditation"
      ]
    },
    {
      "cells": [
        "Brochures"
      ]
    },
    {
      "cells": [
        "Details"
      ]
    },
    {
      "cells": [
        "NAU History"
      ]
    },
    {
      "cells": [
        "About Houston"
      ]
    },
    {
      "cells": [
        "NAU Policies"
      ]
    },
    {
      "cells": [
        "Student Achievements"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SubMenuListStepDefinitions.user_should_see_the_list_of_About_Nau_sub_menu(String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});