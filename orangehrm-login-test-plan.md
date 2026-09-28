# OrangeHRM Login Test Plan

## Application Overview

Test plan for OrangeHRM login page positive and negative scenarios.

## Test Scenarios

### 1. OrangeHRM Login

**Seed:** `tests/seed.spec.ts`

#### 1.1. Positive login with valid credentials

**File:** `tests/orangehrm-login-positive.spec.ts`

**Steps:**
  1. Open the OrangeHRM login page
    - expect: The page displays the Username and Password fields and a Login button.
  2. Enter the valid username Admin and password admin123
    - expect: The credentials are entered into the corresponding fields.
  3. Click the Login button
    - expect: The user is redirected to the dashboard and the dashboard content is displayed.

#### 1.2. Negative login with invalid username

**File:** `tests/orangehrm-login-negative.spec.ts`

**Steps:**
  1. Open the OrangeHRM login page
    - expect: The page displays the login form.
  2. Enter an invalid username and the correct password admin123
    - expect: The values are entered into the form fields.
  3. Click the Login button
    - expect: An authentication error message is displayed and the user remains on the login page.

#### 1.3. Negative login with invalid password

**File:** `tests/orangehrm-login-negative.spec.ts`

**Steps:**
  1. Open the OrangeHRM login page
    - expect: The page displays the login form.
  2. Enter the valid username Admin and an invalid password
    - expect: The values are entered into the form fields.
  3. Click the Login button
    - expect: An authentication error message is displayed and the user remains on the login page.

#### 1.4. Negative login with empty fields

**File:** `tests/orangehrm-login-negative.spec.ts`

**Steps:**
  1. Open the OrangeHRM login page
    - expect: The page displays the login form.
  2. Leave both the Username and Password fields empty
    - expect: The login button is available but the form does not submit successfully.
  3. Click the Login button
    - expect: The user stays on the login page and validation feedback is shown.
