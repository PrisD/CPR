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
    expandedIndex: number = -1;
    animatingOut: boolean = false;

    constructor(private router: Router) { }

    ngOnInit() {
        this.items = [
            {
                label: 'Home',
                routerLink: '/'
            },
            {
                label: 'Radioterapia',
                routerLink: '/radiotherapy',
                items: [
                    {
                        label: 'Braquiterapia HDR (Próstata)',
                        routerLink: '/hdr-prostate-brachytherapy'
                    },
                    {
                        label: 'Braquiterapia HDR (Ginecológica)',
                        routerLink: '/gynecological-hdr-brachytherapy'
                    },
                    {
                        label: 'Braquiterapia HDR (De Piel)',
                        routerLink: '/hdr-skin-brachytherapy'
                    },
                    {
                        label: 'IGRT EXACTRAC –(Radioterapia guiada por Imágenes)',
                        routerLink: '/igrt-exactrac-brainlab-image-guided-radiotherapy'
                    },
                    {
                        label: 'SBRT EXACTRAC – (Radiocirugía Corporal)',
                        routerLink: '/sbrt-exactrac-body-stereotaxic-radiosurgery'
                    },
                    {
                        label: 'SRS EXACTRAC – (Radiocirugía Craneal)',
                        routerLink: '/srs-exactrac-cranial-stereotaxic-radiosurgery'
                    },
                    {
                        label: 'Hybridarc Terapia Dinámica Volumétrica',
                        routerLink: '/hybridarc-volumetric-dynamic-therapy'
                    },
                    {
                        label: 'IMRT – (Radioterapia de Int. Modulada)',
                        routerLink: '/imrt-intensity-modulated-radiotherapy-with-multileaf'
                    },
                    {
                        label: 'R3D – (Radioterapia Tridimensional)',
                        routerLink: '/r3-d-three-dimensional-conformal-radiotherapy'
                    }
                ]
            },
            {
                label: 'Diagnóstico por imágenes',
                routerLink: '/diagnostic-imaging'
            },
            {
                label: 'Psicología',
                routerLink: '/psychology',
                items: [
                    {
                        label: 'Psico-Oncología',
                        routerLink: '/psycho-oncology'
                    },
                    {
                        label: 'Taller de Mindfulness',
                        routerLink: '/mindfulness-workshop'
                    },
                    {
                        label: 'Mindfulness',
                        routerLink: '/what-is-mindfulness'
                    }
                ]
            },
            {
                label: 'Turnos',
                routerLink: '/shifts-options'
            },
            {
                label: 'Nuestro centro',
                routerLink: '/our-center',
                items: [
                    {
                        label: 'Nuestra historia',
                        routerLink: '/our-history'
                    },
                    {
                        label: 'Atención local y externa',
                        routerLink: '/atention'
                    },
                    {
                        label: 'Certificaciones',
                        routerLink: '/certifications'
                    }
                ]
            },
            {
                label: 'Staff',
                routerLink: '/staff'
            },
            {
                label: 'Equipamiento',
                routerLink: '/equipment',
                items: [
                    {
                        label: 'Equipamiento principal',
                        routerLink: '/equipment'
                    },
                    {
                        label: 'Software de Planificación',
                        routerLink: '/software'
                    }
                ]
            },
            {
                label: 'Novedades',
                routerLink: '/news'
            },
            {
                label: 'Contacto',
                routerLink: '/contact'
            }
        ];
    }
    redireccionar(): void {
        window.location.href = "/";
    }

    goToShifts() {
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
