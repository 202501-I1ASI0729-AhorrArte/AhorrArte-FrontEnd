import {Component} from '@angular/core';
import {NgForOf, NgOptimizedImage, ViewportScroller} from "@angular/common";
import {Router, RouterLink} from '@angular/router';
import {SidebarComponent} from "../../public/components/sidebar/sidebar.component";
@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgForOf,
    RouterLink,
    SidebarComponent
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

  currentSlideIndex = 0;

  constructor(private viewportScroller: ViewportScroller, private router: Router) {}


  blogItems = [
    {
      image: 'assets/images/carrrusel01.jpg',
      title: 'Alianza Estratégica con BN',
      description: 'La startup AhorrArte entabló una alianza estratégica con el Banco de la Nación.'
    },
    {
      image: 'assets/images/carrusel02.jpg',
      title: 'Planificación Financiera Aumenta',
      description: 'Se observa un aumento del 15% en las tasas que evalúan la gestión financiera en las familias.'
    },
    {
      image: 'assets/images/carrusel03.jpg',
      title: 'Ranking de plataformas financieras',
      description: 'En una reciente evaluación, AhorrArte obtuvo el primer lugar en el ranking de este año.'
    },
    {
      image: 'assets/images/carrrusel01.jpg',
      title: 'Nuevas Oportunidades de Inversión',
      description: 'AhorrArte ha abierto nuevas oportunidades de inversión para los usuarios de la plataforma en el extranjero.'
    },
    {
      image: 'assets/images/carrusel02.jpg',
      title: 'Crecimiento de la Cartera de Clientes',
      description: 'La cartera de clientes de AhorrArte ha crecido un 25% en el último trimestre.'
    },
    {
      image: 'assets/images/carrusel03.jpg',
      title: 'Nuevas Oportunidades de Inversión',
      description: 'AhorrArte ha abierto nuevas oportunidades de inversión para los usuarios de la plataforma en el extranjero.'
    }
  ];

  toggleNav() {
    // Implementar la lógica para el menú hamburguesa
  }

  navigateToAbout() {
    this.router.navigate(['/about-us']);
  }

  subscribe() {
    // Implementar la lógica para suscribirse
    console.log('User subscribed to the newsletter');

  }

  moveSlide(direction: number) {
    const slides = document.querySelectorAll('.blog-item');
    const totalSlides = slides.length;
    const slideWidth = slides[0].getBoundingClientRect().width;
    const blogContent = document.querySelector('.blog-content');

    this.currentSlideIndex += direction;

    if (this.currentSlideIndex < 0) {
      this.currentSlideIndex = 0;
    }

    if (this.currentSlideIndex >= totalSlides) {
      this.currentSlideIndex = totalSlides - 1;
    }

    const transformValue = -(this.currentSlideIndex * slideWidth);

    if (blogContent instanceof HTMLElement) {
      blogContent.style.transform = `translateX(${transformValue}px)`;
    }

  }
}
