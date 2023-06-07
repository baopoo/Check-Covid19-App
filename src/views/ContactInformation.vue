<template>
  <div class="contact-information">
    <Header></Header>
    <div class="px-3 mb-4">
      <Step :current-step="'3.Contact Information'" :current-percent="3" :next-step="'Final Step'"> </Step>
    </div>
    <div class="contact-information-content px-3 pb-2 fs-normal">
      <span class="fw-400 text-normal fc-gray9">Please fill in your contact details:</span>
      <div class="contact-information-content-form mt-3 p-3">
        <ValidationObserver v-slot="{ handleSubmit }">
          <form 
            id="contact-information-form" 
            class="d-flex flex-column gap-3" 
            @submit.prevent="handleSubmit(onSubmit)"
          >
            <ValidationProvider name="FirstName" rules="required|alpha_spaces" v-slot="{ errors }">
              <Input
                :label="'First Name'"
                :placeholder="'Input your first name !'"
                v-model="user.firstName"
                :error="errors[0]"
              ></Input>
            </ValidationProvider>
            <ValidationProvider name="LastName" rules="required|alpha_spaces" v-slot="{ errors }">
              <Input
                :label="'Last Name'"
                :placeholder="'Input your last name !'"
                v-model="user.lastName"
                :error="errors[0]"
              ></Input>
            </ValidationProvider>
            <div class="form-group d-flex flex-column">
              <label for="contact-input" class="text-small fw-400 fc-gray9">Contact Number</label>
              <div class="d-flex gap-2">
                <Select 
                  :listSelects="contactNumbers" 
                  @selectedValue="user.contactNumber = $event">
                </Select>
                <ValidationProvider name="Phone" rules="required|numeric" v-slot="{ errors }">
                  <Input v-model="user.contactPhone" :error="errors[0]" />
                </ValidationProvider>
              </div>
            </div>
            <ValidationProvider name="Confirm" :rules="{ required: { allowFalse: false }}" v-slot="{ errors }">
              <div class="d-flex gap-3">
                <CheckBox 
                  v-model="user.isConfirmed"
                  @checked="user.isConfirmed = $event"
                >
                </CheckBox>
                <span class="fw-400 text-small fc-gray8"
                  >I confirm that the above information is accurate and I have read and understood the requirements and
                  expectations of entering the Silicon Stack premises.</span
                >
              </div>
              <small v-if="errors[0] !== ''" class="fw-400 text-danger fst-italic">{{ errors[0] }}</small>
            </ValidationProvider>
          </form>
        </ValidationObserver>
      </div>
    </div>
    <div class="contact-information-button button-group">
      <Button 
        :name="'Back'" 
        :type="'default'"
        @onClickButton="onClickButtonBack()" 
      ></Button>
      <Button 
        :name="'Submit'" 
        form="contact-information-form" 
        :type="'primary'" 
        :htmlType="'submit'"
      ></Button>
    </div>
  </div>
</template>
<script>
import Header from '../components/Header.vue'
import Step from '../components/Step.vue'
import Button from '../components/Button.vue'
import Input from '../components/Input.vue'
import Select from '../components/Select.vue'
import CheckBox from '../components/CheckBox.vue'
import { extend } from 'vee-validate'
import { alpha_spaces, numeric, required } from 'vee-validate/dist/rules'

//Convert lại message error

// extend('alpha_spaces', {
//   ...alpha_spaces,
//   message: 'This field must contain alphabetic characters or spaces !',
// })
// extend('numeric', {
//   ...numeric,
//   message: 'This field must be numeric characters !',
// })
// extend('required', {
//   ...required,
//   message: 'This field is required !',
// })

//Lây message mặc định trong file main.js khai báo
extend('alpha_spaces', alpha_spaces);
extend('numeric', numeric);
extend('required', required);



export default {
  components: { Header, Step, Button, Input, Select, CheckBox },
  data() {
    return {
      user: {
        firstName: '',
        lastName: '',
        contactNumber: '',
        contactPhone: '',
        isConfirmed: false,
      },
    }
  },
  computed: {
    contactNumbers() {
      return this.$store.getters['contactNumber/listContactNumber']
    },
  },
  beforeCreate() {
    this.$store.dispatch('contactNumber/fetchListContactNumber')
  },
  methods: {
    onSubmit() {
      console.log(this.user)
      this.$store.dispatch('user/fetchUserInfo', this.user)
      this.$router.push('/submit')
    },
    onClickButtonBack(){
      this.$router.push('/health-checklist');
    }
  },
}
</script>
<style lang="scss" scoped>
.contact-information {
  &-content {
    &-form {
      background: #f6f6fa;
    }
  }
  &-button {
    > button {
      flex: 1;
    }
  }
}
</style>
