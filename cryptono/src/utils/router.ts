export interface Route {
    path: string;
    view: () => string;
    afterRender?: () => void;
}

export class Router {
    routes: Route[] = [];
    root: HTMLElement;

    constructor(root: HTMLElement) {
        this.root = root;
    }

    addRoute(path: string, view: () => string, afterRender?: () => void) {
        this.routes.push({ path, view, afterRender });
    }

    navigate(path: string) {
        const route = this.routes.find(r => r.path === path);
        if (route) {
            this.root.innerHTML = route.view();
            if (route.afterRender) {
                route.afterRender();
            }
        } else {
            console.error(`Route not found: ${path}`);
        }
    }
}
