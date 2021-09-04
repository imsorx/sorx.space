import { animate, query, stagger, style, transition, trigger } from "@angular/animations";

export const SlideInLeft = trigger('slideInLeft', [
    transition(':enter', [
        query(':enter', [
            style({ opacity: 0, transform: 'translateX(-2%)' }),
            stagger('180ms', [
                animate('200ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
            ])
        ])
    ])
])