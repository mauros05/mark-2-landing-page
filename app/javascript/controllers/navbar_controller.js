import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="navbar"
export default class extends Controller {

  static targets = [
    'dropMobileMenu'
  ]

  openMobileMenu(){
    this.dropMobileMenuTarget.classList.toggle("hidden")
  }

}
