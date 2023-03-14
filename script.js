const firstnameAndLastname = () => document.getElementById('fu-name')
const phonenumber = () => document.getElementById('fu-phonenumber')
const cartype = () => document.getElementById('fu-select')
const moredetail = () => document.getElementById('fu-moredetail')
const button = () => document.getElementById('fu-button')

const validate = () => {
  try {
    const _name = firstnameAndLastname().value
    const _phonenumber = phonenumber().value
    const _cartype = cartype().value
    const _moredetail = moredetail().value
    if (
      !!(_name || '') &&
      (_phonenumber || '').length >= 10 &&
      !!(_cartype || '') &&
      !!(_moredetail || '')
    ) {
      const b = button()
      b.style.backgroundColor = 'rgba(243, 156, 18, 1)'
      b.style.cursor = 'pointer'
    } else {
      b.style.backgroundColor = 'rgba(243, 156, 18, 0.4)'
      b.style.cursor = 'default'
    }
  } catch (e) {
    console.log('some form error')
  }
}

const b = button()
const fn_ln = firstnameAndLastname()
const pn = phonenumber()
const ct = cartype()
const md = moredetail()

fn_ln.addEventListener('input', () => validate())
pn.addEventListener('input', () => validate())
ct.addEventListener('input', () => validate())
md.addEventListener('input', () => validate())

setTimeout(() => {
  validate()
}, 1000)

b.addEventListener('click', () => {
  const _name = firstnameAndLastname()
  const _phonenumber = phonenumber()
  const _cartype = cartype()
  const _moredetail = moredetail()

  // send line notify
  alert('send line noti fy')
  // reset
  _name.value = ''
  _phonenumber.value = ''
  _moredetail.value = ''
  _cartype.selectedIndex = 0
})
