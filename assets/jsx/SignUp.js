
class SignUp extends React.Component {

  render() {

    return (
      <div id="signup" v-cloak>
        <div class="container" v-if="!cloudSuccess">
          <h1 class="text-center">Create an account</h1>
          <div class="signup-form">
            <p class="text-center">Let's get started! Becoming a member is free and only takes a few minutes.</p>
            <hr/>
            <ajax-form action="signup" :syncing.sync="syncing" :cloud-error.sync="cloudError" @submitted="submittedForm()" :handle-parsing="handleParsingForm">
              <div class="form-group">
                <label for="full-name">Full name</label>
                <input class="form-control" id="full-name" type="text"  :class="[formErrors.fullName ? 'is-invalid' : '']" v-model.trim="formData.fullName" placeholder="Sturgis P. Sturgeon" autocomplete="name" focus-first />
                <div class="invalid-feedback" v-if="formErrors.fullName">Please enter your full name.</div>
              </div>
              <div class="form-group">
                <label for="email-address">Email address</label>
                <input class="form-control" id="email-address" type="email"  :class="[formErrors.emailAddress ? 'is-invalid' : '']" v-model.trim="formData.emailAddress" placeholder="sturgeon@example.com" autocomplete="email" />
                <div class="invalid-feedback" v-if="formErrors.emailAddress">Please enter a valid email address.</div>
              </div>
              <div class="form-group">
                <label for="password">Choose a password</label>
                <input class="form-control" id="password" type="password"  :class="[formErrors.password ? 'is-invalid' : '']" v-model.trim="formData.password" placeholder="••••••••" autocomplete="new-password" />
                <div class="invalid-feedback" v-if="formErrors.password">Please enter a password.</div>
              </div>
              <div class="form-group">
                <label for="confirm-password">Confirm password</label>
                <input class="form-control" id="confirm-password" type="password"  :class="[formErrors.confirmPassword ? 'is-invalid' : '']" v-model.trim="formData.confirmPassword" placeholder="••••••••" autocomplete="new-password" />
                <div class="invalid-feedback" v-if="formErrors.confirmPassword">Your password and confirmation do not match.</div>
              </div>
              <div class="form-group form-check">
                <input class="form-check-input" id="terms-agreement" type="checkbox" v-model="formData.agreed" />
                <label for="terms-agreement" class="form-check-label" :class="[formErrors.agreed ? 'text-danger' : '']">I have read &amp; agree to the <a target="_blank" href="/terms">terms of service</a>.</label>
              </div>
              <p class="text-danger" v-if="cloudError==='emailAlreadyInUse'"><small>It looks like there's already an account with your email address. If you forgot your password, you can recover it <a href="password/forgot">here</a>.</small></p>
              <p class="text-danger" v-else-if="cloudError"><small>An error occured while processing your request. Please check your information and try again, or <a href="/support">contact support</a> if the error persists.</small></p>
              <div class="form-group">
                <ajax-button type="submit" :syncing="syncing" class="btn-dark btn-lg btn-block">Create account</ajax-button>
              </div>
            </ajax-form>
            <p class="text-center">Have an account? <a href="/login">Sign in</a></p>
          </div>
        </div>
        <div class="container" v-if="cloudSuccess">
          <h1 class="text-center">Check your email!</h1>
          <div class="success-message">
            <hr/>
            <p>Your account is nearly ready. All you have to do is click the link we sent to <strong>{{formData.emailAddress}}</strong>.</p>
            <p>(You can still access your dashboard now, but some features will be unvavailable until we've verified your email address.)</p>
            <p><a class="btn btn-outline-info" href="/">Go to dashboard</a></p>
          </div>
        </div>
      </div>

    );
  }
}

export default SignUp;