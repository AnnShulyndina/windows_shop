import forms from './moduls/forms';
import modals from './moduls/modals';
import tabs from './moduls/tabs';
import './slider';

window.addEventListener('DOMContentLoaded', () => {
    modals();
    tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
    tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');
    forms();
});