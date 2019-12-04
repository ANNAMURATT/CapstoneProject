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
});ademic Catalog"
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