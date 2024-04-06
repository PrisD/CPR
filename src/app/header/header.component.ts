import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [MessageService]
})
export class HeaderComponent implements OnInit{
  items: MenuItem[] | undefined;
  sidebarVisible: boolean = false;
  
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
                    routerLink: '/radiotherapy'
                },
                {
                    label: 'BRAQUITERAPIA HDR GINECOLÓGICA INTRACAVITARIA',
                    routerLink: '/radioterapia/ginecológica-intracavitaria'
                },
                {
                    label: 'BRAQUITERAPIA HDR GINECOLÓGICA INTERSTICIAL',
                    routerLink: '/radioterapia/ginecológica-intersticial'
                },
                {
                    label: 'BRAQUITERAPIA HDR DE PIEL',
                    routerLink: '/radioterapia/de-piel'
                },
                {
                    label: 'IGRT EXACTRAC – BRAINLAB – RADIOTERAPIA GUIADA POR IMÁGENES',
                    routerLink: '/radioterapia/igrt-exactrac'
                },
                {
                    label: 'SBRT EXACTRAC – RADIOCIRUGÍA ESTEREOTÁXICA CORPORAL',
                    routerLink: '/radioterapia/sbrt-exactrac'
                },
                {
                    label: 'SRS EXACTRAC – RADIOCIRUGÍA ESTEREOTÁXICA CRANEAL',
                    routerLink: '/radioterapia/srs-exactrac'
                },
                {
                    label: 'HYBRIDARC TERAPIA DINÁMICA VOLUMÉTRICA',
                    routerLink: '/radioterapia/hybridarc'
                },
                {
                    label: 'IMRT – RADIOTERAPIA DE INTENSIDAD MODULADA CON MULTILÁMINAS',
                    routerLink: '/radioterapia/imrt'
                },
                {
                    label: 'R3D – RADIOTERAPIA TRIDIMENSIONAL CONFORMADA',
                    routerLink: '/radioterapia/r3d'
                }
            ]
        },
        {
            label: 'DIAGNÓSTICO POR IMÁGENES',
            routerLink: '/diagnostico-imagenes'
        },
        {
            label: 'PSICOLOGÍA',
            routerLink: '/psychology'
        },
        {
            label: 'TURNOS',
            routerLink: '/turnos'
        },
        {
            label: 'NUESTRO CENTRO',
            routerLink: '/nuestro-centro'
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

  }
}
