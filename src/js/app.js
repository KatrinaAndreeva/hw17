import { LoginComponent } from './components/login.component';
import { HomeComponent } from './components/home.component';
import { NotFoundComponent } from './components/notfound.component';
import { SignUpComponent } from './components/signup.component';
import { UserComponent } from './components/user.component';
import { ActiveRoute } from './core/active-route.service';
import { NewsComponent } from './components/news.component';
import { NavbarComponent } from './components/navbar.component';
import { AuthGuard } from './guards/auth.guard';
import { WinnersComponent } from './components/winners.component';



const routes = {
    '/': {
        component: new HomeComponent(),
        guard: new AuthGuard()
    },
    '/login': {
        component: new LoginComponent()
    },
    '/users/:id': {
        component: new UserComponent(),
        guard: new AuthGuard()
    },
    '/signup': {
        component: new SignUpComponent()
    },
    '/news': {
        component: new NewsComponent()
            // guard: new AuthGuard()
    },
    '**': {
        component: new NotFoundComponent()
    },
    '/winners': {
        component: new WinnersComponent()
    },

}



const activeRoute = new ActiveRoute();

const router = async() => {
    //get content container and header container
    const container = document.querySelector('app-container');
    const header = null || document.querySelector('app-header');

    // get component
    const request = activeRoute.parseRequestURL();
    const url = (request.resourse ? '/' + request.resourse : '/') + (request.id ? '/:id' : '');
    console.log(url);

    // get component for actve roate
    const component = routes[url] ? routes[url]['component'] : routes['**']['component'];
    const guard = routes[url] ? routes[url]['guard'] : null;
    //check guard
    if (guard && !guard.check()) return;

    //render header
    if (header) {
        const navbarComponent = new NavbarComponent();
        header.innerHTML = navbarComponent.render();
        navbarComponent.afterRender();
    }

    await component.beforeRender();
    container.innerHTML = component.render();
    component.afterRender();
}

window.addEventListener('load', router);
window.addEventListener('hashchange', router);