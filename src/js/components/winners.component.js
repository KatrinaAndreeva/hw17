import { WinnersService } from '../services/winners.service';
import { AuthService } from '../services/auth.service';

export class WinnersComponent {
    constructor() {
        this._winnersService = new WinnersService();
        this._authService = new AuthService();

        this._winnersContainer = `<div>winners page</div>`
        this._winers;
        this._winersTemplate = '';
    }
    async beforeRender() {
        this._winers = await this._winnersService.getWinners();
        this._winers.forEach((winner) => this._winnerView(winner));
    }
    render() {
        return `<div class="row">${this._winersTemplate}</div>`;
    }
    afterRender() {

    }

    _winnerView(winner) {
        return this._winersTemplate += `
            <div class="col-4">
                <div class="card" style="margin: 5px">
                    <img src="${winner.member_id.images[0].image_basic.url}" alt="winner" style="width: 100%; height: auto">
                </div>
            </div>
        `;
    }
}