import { AuthService } from '../services/auth.service';

export class SignUpComponent {
    constructor() {
        this._signUpService = new AuthService();
        this._data = {
            email: '',
            password: '',
            first_name: '',
            last_name: '',
            nickname: '',
            date_of_birth_day: '',
            date_of_birth_month: '',
            date_of_birth_year: '',
            country: '',
            city: '',
            gender_orientation: '',
            phone: ''
        };
    }
    async beforeRender() {

    }

    render() {
        return `
        <div class="auth-wrap d-flex">
            <div class="auth-form col col-6 mx-auto my-auto">
                <h3>Sign Up to Social</h3>
                <p class="text-secondary">It\`s awesome here... Enter</p>
                <form name="signUpForm" novalidate>
                    <div class="form-group">
                        <div class="row">
                            <div class="col col-6">
                                <input type="text" class="form-control form-control-sm" id="first_name" placeholder="First Name">
                            </div>
                            <div class="col col-6">
                                <input type="text" class="form-control form-control-sm" id="last_name" placeholder="Last Name">
                            </div>
                        </div>

                        <input type="text" class="form-control form-control-sm mt-3" id="nickname" placeholder="Nick Name">

                        <div class="row mt-3">
                            <div class="col col-4">
                                <input type="text" class="form-control form-control-sm" id="date_of_birth_day" placeholder="Day">
                            </div>
                            <div class="col col-4">
                                <input type="text" class="form-control form-control-sm" id="date_of_birth_month" placeholder="Month">
                            </div>
                            <div class="col col-4">
                                <input type="text" class="form-control form-control-sm" id="date_of_birth_year" placeholder="Year">
                            </div>
                        </div>

                        <div class="row mt-3">
                            <div class="col col-6">
                                <input type="text" class="form-control form-control-sm" id="country" placeholder="Country">
                            </div>
                            <div class="col col-6">
                                <input type="text" class="form-control form-control-sm" id="city" placeholder="City">
                            </div>
                        </div>

                        <select name="gender" id="gender_orientation" class="form-control form-control-sm mt-3">
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>

                        <input type="email" class="form-control form-control-sm mt-3" id="email" placeholder="name@example.com" required data-pattern="^\S+@[a-z]+\.[a-z]+$">
                        <input type="text" class="form-control form-control-sm mt-3" id="phone" placeholder="Phone number">
                        <input type="password" class="form-control form-control-sm mt-3" id="password" placeholder="password" required data-pattern="\S+">
                        <div class="d-flex mt-5">
                            <button type="submit" id="signUp" class="btn btn-primary btn-sm">Sign Up</button>
                            <a href="#/login" class="btn btn-link btn-sm ml-auto">Already have an account? Sign in</a>
                        </div>
                    </div>
                </form>
            </div>
            <!-- /.auth-form -->
            <div class="auth-bg col col-6">

            </div>
            <!-- /.auth-bg -->
        </div>
        <!-- /.auth-wrap -->
        `;
    }

    afterRender() {
        document.forms['signUpForm'].addEventListener('submit', (e) => {
            e.preventDefault();
            for (let key in this._data) {
                this._data[key] = e.target.elements[key].value
            }


            // this._data.email = e.target.elements['email'].value;
            // this._data.password = e.target.elements['password'].value;
            // this._data.first_name = e.target.elements['first_name'].value;
            // this._data.last_name = e.target.elements['last_name'].value;
            // this._data.nickname = e.target.elements['nickname'].value;
            // this._data.date_of_birth_day = e.target.elements['date_of_birth_day'].value;
            // this._data.date_of_birth_month = e.target.elements['date_of_birth_month'].value;
            // this._data.date_of_birth_year = e.target.elements['date_of_birth_year'].value;
            // this._data.country = e.target.elements['country'].value;
            // this._data.city = e.target.elements['city'].value;
            // this._data.gender_orientation = e.target.elements['gender_orientation'].value;
            // this._data.phone = e.target.elements['phone'].value;

            console.log(this._data);

            this._signUpService.signUp(this._data)
                .then((response) => {
                    console.log(response);
                })
                .catch((err) => {
                    console.log(err);
                });
        });
    }
}