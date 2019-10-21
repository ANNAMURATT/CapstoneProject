$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src\\test\\resources\\features\\MainPage.feature");
formatter.feature({
  "name": "Main page modulus",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@smoke"
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
  "location": "LoginPageStepDefinitions.user_on_the_login_page()"
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
        "Favulty \u0026 Staff"
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
formatter.uri("src\\test\\resources\\features\\SubMenuList.feature");
formatter.feature({
  "name": "Verify submenu list",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@smoke"
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
  "location": "LoginPageStepDefinitions.user_on_the_login_page()"
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
  "location": "LoginPageStepDefinitions.user_on_the_login_page()"
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
  "location": "LoginPageStepDefinitions.user_on_the_login_page()"
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
  "location": "LoginPageStepDefinitions.user_on_the_login_page()"
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
  "location": "LoginPageStepDefinitions.user_on_the_login_page()"
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