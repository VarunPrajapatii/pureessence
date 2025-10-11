# Checkout Components

This folder contains modular components for the checkout page.

## Components

### AddressForm
- **Purpose**: Handles the delivery address form with all input fields
- **Props**:
  - `form`: UseFormReturn object from react-hook-form
  - `loading`: Boolean to disable inputs during submission
- **Features**:
  - All 9 address fields (firstName, lastName, phone, pincode, flatHouse, areaStreet, landmark, townCity, state)
  - Form validation with zod schema
  - Indian states dropdown with all 36 states/UTs
  - Responsive grid layout for name fields

### OrderSummary
- **Purpose**: Displays order items, total price, and handles OTP verification inline
- **Props**:
  - `items`: Array of checkout items with productId, name, quantity, price
  - `totalPrice`: Total order amount
  - `loading`: Boolean to disable submit button
  - `showOtpField`: Boolean to show/hide OTP input field
  - `otp`: Current OTP value
  - `otpLoading`: Boolean for OTP verification loading state
  - `phoneNumber`: Phone number to display in OTP label
  - `onSubmit`: Function to handle initial form submission (sends OTP)
  - `onSetOtp`: Function to update OTP value
  - `onVerifyAndPay`: Function to handle OTP verification and payment
- **Features**:
  - Shows each item with quantity and subtotal
  - Displays order total with Currency component
  - Initially shows "Proceed to Pay" button
  - After clicking, shows OTP input field above the button
  - OTP field with label showing phone number
  - "Verify and Pay" button (disabled until 6 digits entered)
  - Smooth transition between states

### OTPVerificationModal (DEPRECATED - No longer used)
- **Note**: OTP verification is now handled inline in the OrderSummary component
- The modal-based approach has been replaced with an inline OTP field that appears above the payment button

## Usage Example

```tsx
import { AddressForm, OrderSummary } from "./components";

// In your component
const [showOtpField, setShowOtpField] = useState(false);
const [otp, setOtp] = useState("");
const [otpLoading, setOtpLoading] = useState(false);

// Form submission - sends OTP
const onSubmit = async (data) => {
  // ... send OTP to phone
  setShowOtpField(true);
  toast.success("OTP sent to your phone number");
};

// OTP verification
const handleVerifyAndPay = async () => {
  if (otp.length !== 6) return;
  setOtpLoading(true);
  // TODO: Add OTP verification API call
  // TODO: Add payment logic after successful verification
  setOtpLoading(false);
};

<Form {...form}>
  <form onSubmit={form.handleSubmit(onSubmit)}>
    <AddressForm form={form} loading={loading} />
  </form>
</Form>

<OrderSummary
  items={checkoutItems}
  totalPrice={totalPrice}
  loading={loading}
  showOtpField={showOtpField}
  otp={otp}
  otpLoading={otpLoading}
  phoneNumber={form.getValues("phone")}
  onSubmit={form.handleSubmit(onSubmit)}
  onSetOtp={setOtp}
  onVerifyAndPay={handleVerifyAndPay}
/>
```
