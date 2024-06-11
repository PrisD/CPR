import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { MenuItem, MessageService } from 'primeng/api';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
    providers: [MessageService]
})
export class HeaderComponent implements OnInit {
    items: MenuItem[] | undefined;
    sidebarVisible: boolean = false;
    headerNoHome: boolean = true;
    expandedIndex: number = -1;
    animatingOut: boolean = false;
    
    constructor(private router: Router) { }

    ngOnInit() {
        this.items = [
            {
                label: 'HOME',
                routerLink: '/'
            },
            {
                label: 'RADIOTERAPIA',
                routerLink: '/radiotherapy',
                items: [
                    {
                        label: 'BRAQUITERAPIA HDR EN PRÓSTATA',
                        routerLink: '/hdr-prostate-brachytherapy'
                    },
                    {
                        label: 'BRAQUITERAPIA HDR GINECOLÓGICA',
                        routerLink: '/gynecological-hdr-brachytherapy'
                    },
                    {
                        label: 'BRAQUITERAPIA HDR DE PIEL',
                        routerLink: '/hdr-skin-brachytherapy'
                    },
                    {
                        label: 'IGRT EXACTRAC – BRAINLAB – RADIOTERAPIA GUIADA POR IMÁGENES',
                        routerLink: '/igrt-exactrac-brainlab-image-guided-radiotherapy'
                    },
                    {
                        label: 'SBRT EXACTRAC – RADIOCIRUGÍA ESTEREOTÁXICA CORPORAL',
                        routerLink: '/sbrt-exactrac-body-stereotaxic-radiosurgery'
                    },
                    {
                        label: 'SRS EXACTRAC – RADIOCIRUGÍA ESTEREOTÁXICA CRANEAL',
                        routerLink: '/srs-exactrac-cranial-stereotaxic-radiosurgery'
                    },
                    {
                        label: 'HYBRIDARC TERAPIA DINÁMICA VOLUMÉTRICA',
                        routerLink: '/hybridarc-volumetric-dynamic-therapy'
                    },
                    {
                        label: 'IMRT – RADIOTERAPIA DE INTENSIDAD MODULADA CON MULTILÁMINAS',
                        routerLink: '/imrt-intensity-modulated-radiotherapy-with-multileaf'
                    },
                    {
                        label: 'R3D – RADIOTERAPIA TRIDIMENSIONAL CONFORMADA',
                        routerLink: '/r3-d-three-dimensional-conformal-radiotherapy'
                    }
                ]
            },
            {
                label: 'DIAGNÓSTICO POR IMÁGENES',
                routerLink: '/diagnostic-imaging'
            },
            {
                label: 'PSICOLOGÍA',
                routerLink: '/psychology',
                items: [
                    {
                        label: 'PSICO-ONCOLOGÍA',
                        routerLink: '/psycho-oncology'
                    },
                    {
                        label: 'TALLER DE MINDFULNESS',
                        routerLink: '/mindfulness-workshop'
                    }
                ]
            },
            {
                label: 'TURNOS',
                routerLink: '/shifts-options'
            },
            {
                label: 'NUESTRO CENTRO',
                routerLink: '/our-center',
                items: [
                    {
                        label: 'NUESTRA HISTORIA',
                        routerLink: '/our-history'
                    },
                    {
                        label: 'ATENCIÓN LOCAL Y EXTERNA',
                        routerLink: '/atention'
                    },
                    {
                        label: 'CERTIFICACIONES',
                        routerLink: '/certifications'
                    }
                ]
            },
            {
                label: 'STAFF DE PROFESIONALES',
                routerLink: '/staff-profesionales'
            },
            {
                label: 'EQUIPAMIENTO',
                routerLink: '/equipamiento'
            },
            {
                label: 'NOVEDADES',
                routerLink: '/novedades'
            },
            {
                label: 'CONTACTO',
                routerLink: '/contacto'
            }
        ];

        this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                this.headerNoHome = (event.urlAfterRedirects === '/');
            }
        });
        

    }
    redireccionar(): void {
        window.location.href = "/";
    }

    goToShifts(){
        this.router.navigate(['\shifts-options']);
      }
    toggleItem(index: number): void {
        if (this.expandedIndex === index) {
            this.expandedIndex = -1;
        } else {
            this.expandedIndex = index;
        }
    }

    isItemExpanded(index: number): boolean {
        return this.expandedIndex === index;
    }   
    toggleSidebar() {
        this.sidebarVisible = !this.sidebarVisible;
        if (this.sidebarVisible) {
            this.disableBodyScroll();
        } else {
            this.enableBodyScroll();
        }
    }

    disableBodyScroll() {
        document.body.style.overflow = 'hidden';
    }

    enableBodyScroll() {
        document.body.style.overflow = '';
    }
    isLinkActive(routerLink: string): boolean {
        return this.router.isActive(routerLink, {
            paths: 'exact',
            queryParams: 'ignored',
            fragment: 'ignored',
            matrixParams: 'ignored'
        });
    }
}
