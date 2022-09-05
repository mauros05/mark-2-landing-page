import { application } from "controllers/application"

import { eagerLoadControllersFrom } from "@hotwired/stimulus-loading"
eagerLoadControllersFrom("controllers", application)

import NavbarController from "./navbar_controller.js"
application.register("navbar", NavbarController)
