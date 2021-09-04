import { animate, query, stagger, style, transition, trigger } from "@angular/animations";

export const SlideIn = trigger('slideIn', [
    transition(':enter', [
        query(':enter', [
            style({ opacity: 0, transform: 'translateY(-10%)' }),
            stagger('180ms', [
                animate('200ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
            ])
        ])
    ])
])