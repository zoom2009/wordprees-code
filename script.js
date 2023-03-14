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
  const formdata = new FormData()

  const url = 'https://notify-api.line.me/api/notify'
  const token = '82W9SWtkvTYmC5swBlUd6HAoYKxiYqKNCxoK5kWSVym'
  formdata.append('message', `\nชื่อ: ${_name.value}\nโทร: ${_phonenumber.value}\nรุ่นรถยนต์: ${_cartype.value}\nรายละเอียดเพิ่มเติม: ${_moredetail.value}`)

  var xhr = new XMLHttpRequest()
  xhr.open('POST', url)
  xhr.setRequestHeader('Authorization', 'Bearer ' + token)
  xhr.onload = function() {
    if (xhr.status === 200) {
      _name.value = ''
      _phonenumber.value = ''
      _moredetail.value = ''
      _cartype.selectedIndex = 0
      Swal.fire({
        icon: 'success',
        title: 'ส่งข้อความสำเร็จ',
        text: 'ทีม Support จะรีบติดต่อคุณกลับภายใน 10 นาที',
        confirmButtonColor: '#f39c12',
      })
    } else {
      console.log('fail to call line notify e:', xhr.statusText)
      Swal.fire({
        icon: 'error',
        title: 'ผิดพลาด',
        text: 'ไม่สามารถส่งข้อความได้ โปรดลองใหม่ภายหลัง',
      })
    }
  }
  xhr.send(formdata)
})
