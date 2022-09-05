import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="navbar"
export default class extends Controller {

  static targets = [
    'dropDownMenu',
    'dropMobileMenu'
  ]

  openMenu() {
    this.dropDownMenuTarget.classList.toggle("hidden")
  }

  openMobileMenu(){
    this.dropMobileMenuTarget.classList.toggle("hidden")
  }

}
