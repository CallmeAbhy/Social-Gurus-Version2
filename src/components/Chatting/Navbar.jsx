import React from 'react'

export const Navbar = () => {
  return (
    <div className="navbar">
        <span className="logo">SG Chat</span>
        <div className="user">
<img src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUSEhIVDxASFxcWFRYQFRASFhUXFRYWFhYXFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGy0lICUvLS0tKy0yLS0uLy0tLSstLS0rLS0tLS0tKystKy0uLS0tKysrLS01LSstNS0tLTcyLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAAAwQBAgUGBwj/xAA/EAACAQIDBgQEAwYDCQEAAAAAAQIDEQQhMQUSQVFhcQYTIoEHMpGhQrHBFCNSctHxM2KCFhc0U3OSorPhFf/EABkBAQEBAQEBAAAAAAAAAAAAAAABAgMEBf/EACIRAQEAAwADAAEFAQAAAAAAAAABAgMREiExEyIyQVGRBP/aAAwDAQACEQMRAD8A+GgAAAAAAAAAAAAAOxsjYjqrfm/Lp8+Muy5dT1mytj0G0qdGNRR1lNKTd+dznlsxxdMNWWT52D7N/sXh6yt5NKLay3N6D+sX+h5vb/wuxNOLqUE60EruOskulln9BjtxyXLTli+eg2nFptNWayaeTT5M1OjkAAAAAAAAAAAAAAAAAAAAAAAAAAAAABZwVBSln8q9r9LlY7Ox8G3Fztkn1zJleRZPbtbMw0q1SNO9lxtyWeXQ+o4XB04U1CKtZarifOvDi3K8W8lZ9LO2V/ufQ6GIseHb9fQ0ftdfZOBdurPT7HvCT3ldPI8/s7aFjr0sW9Ubw5PabJb6fM/jX4Dit7G4aNuNWMdLauSXTN/U+KH67xEfMhKM1eMlazPy/wCM9i/seMrYfPdjK8L8YSW9Hvk7ex6cMuvHsw8XEABtzAAAAAAAAAAAAAAAAAAAAAAAAAAAPWeE571Jw0anfpayf6M8me28JzdPDuaw1PEU5N+a55TtfdUYS/Dln7nPZeR01Y3K8iedVb6tbO931ef6o9bsarKSWTeR89wdFOrGMLpyfHO6eavxT+ufI9x+1yoU7QjKc0rWipPlqkjhskvOPVo7j3r2uAio68TqwxkI572p8dxe2dpTX7uEkr55xTfaKdz1/gvAVa9OrTxe9GtNScc3eCeUc8s73YmNkaucte1l4pwsX5c6sN9/hTvL6I+T/HWlRdTD1qcLTqRmpTz9aju7l0+V3n1OxsD4d2kp16lSUW23ao6V2m1dqHqvfqUfjHsyMaNKonUqwgoU6cnnuy9e/vt670Yx4axWZ0wvtx2T1XyEGWYO7ygAAAAAAAAAAAAAAAAAAAAAAAAAAHtPhxjqW/PCV4ylTxCvBxzcKkb525NcuR4skoVpQlGcG4zi04tcGs0zOWPlONYZeN6+mbfwccK4QpwStvRvpfNSUk+N7/W50th7Tjq3f0+t3tK1uB4/HeNp4pUoVaUIzg86kb3lla1uC+pbpWqxkqeU915KyvazPNdfPr147Z3099HxIpR3t6FKPN2TS/zO12+xBsXaElU85JtOWbv62rJeqErNJrPszwlKlOlu1qickrOyi5O/+ZW4EW2sbHFzVWmpwq2S3o3V0srZFmLd2T+I+t+N8fUoRWIpR36SSlNRklKGnqs7qSz9rHmPGW2I4zZFeorZSoyVk9fNjBp345s28J7OxU6G7Kdt7LemnUtHO6Sva9r8eOhQ+I1GGF2dGjTjuxq1IRf+neqS4c0vqi4z9XWNmX6OV8lZgyzB6XiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGYs7eytp+VUjJ8PumcQnteKfLIljWNfVNi45Tla6Td5R7O1zowU6ct3yL73FRi0/qfI8DtOpTacZfLonp27HtMN4/k4qG49/RKGfsjjcL9enDd/FfUfDSqSspKNOP8K17HzL43bXjPEwwtN3hhk963/MqWuvZRX1Z6TYu1q9NutiLUaaTklJrJJXbkuD6XPne1qEcXOpiYvcnOpKTUtGpSdr8noa1+6xut+vLAvYnZNaGsG1zh6l3y4FKx1edgAAAAAAAAAAAAAAAAAAAAAAAAA2p023ZK4GpJSoylor/l9S7SwUV8zu+S0+pZ34/L8vKwHPdFR19Uvt/wDTfC4lRupK8Za9OpPKndaZlSphnwJ9JU9bBLWE4yjwV8yxsHEeXWUm1DdvnK2XDicmUWtUCXHs41MuXr0/i/xJ+0ONOk35NNa6b8uL7FTZtVqFuDOVh6V30OvRaii44zGciZZXK9q7CvJPJ6ZklbE73z04VP5kn9ylCqYnUuaZKuGw0taUqb50pX/8ZFeWxIS/wq8W/wCGqnB/XRkjZHTnryIOfj9n1KLtONr6NZp9mVD1GFxKmvIq+qnJO19Ytcmefx+FdKbg87aPmnowquAAAAAAAAAAAAAAAAAZSAmw1DefQvwio3twIYWjG3MSnl3A332aXzMXEUESRqMbxmorCADyrmJYRIkJ3w6oCClBIsJEDyJ6egGTDNmjBRFORVUsn2/It1YlJOzIN8LV/eRfJ/3LW1479NS/FSbi+sb/AKXX3KFCNpdmX6U7ucXnxtzWaf2f2A4YJK9Ldk4vg/7EYUAAAAAAAAAAAAACbDrj7IhLCVrLkBPWZGzeaNEEZgyelr2K8YX6E17AZk8ySKNIIkQGJk98kyvUJaTvFrkBiehthZEc3Zsxh5WYFuQsZZhlCSObXjmdO5UxMNQKc3aafOxJf94/836o0qrKL7oSfqi+32ZBFi1mn0/LL+hAXdows+zaKQUAAAAAAAAAAAAAZiWWV4aos3AxH6GYvI1g8zMQjNyVEFSJtTll1AtJm8SKDN6cswE9TOHfqa4MxJ5kcJepdwJMTwIVKzRPjOHuVbgdS90GRYed0bb4GKjIJsmkyCYENRens1/QhqPJW4E0vll2K6WXcC/tiOUZfxKL+zX6HJOtj86EHysjkhQAAAAAAAAAAAABvT1RYZBRWZZsEQ3swsmZqRNb6MCa5FF2ZtFmKq4gSwq6m1GeZBfLI3oAT1JakdPVCs8xAC1idPf80VJIuVdH7FSQE2Elw5mZshw8rSJ8QswJIvK5DUNqM+D4mKqYET49UyDgTmY04pWlZdQN62eHXRr82cs7uDoUpJ05VVZ3s9Gnqsnrnc5uO2fOl8y9L+WS0fZhVQAAAAAAAAAAAABLRRPFkVGaSJfPiwMTiQx4otXXMgqrO6CFNm81lYrG8UBlrRElMi1ZLEDLd2bojiSLUC5bL2Kki1yIaiArp2LtTNJlKRbw7vHsBCkTzZBLUmegEFd5Mp2b69y1i5ZJETfPL2VwrRU+v04Fipim6XluW9aV1rkrGlOKvdP/ALkb42jZKV4t8VG6efG2n0ApAAAAAAAAAAAAANo34ZkkqLWqsKbSWbefCP8AU385vgBEl1sPMJZTlyRG+t0BobxeRokbgIEvA1gjeYCBJDUm2ds+tWe7RpVK0uVKEp272WXuemj8Odp+X5v7Nl/Bvw8y38l/te/QnZFmNvx51cCKpoWcXg6lN7tWnOk72tUhOD+kka4nA1IQcpR3Y5a9Xa/1/MrKhMlwcs7czu+GfBeMxzXk0nGk3nWqLdppcbN/O+iPp2A+DmCppSrV69VrWzhSjf2Tf3M3ORuYZV8UqrMlSPulb4TbNqSjKLr01xSq3U/eSbXs0XV8ONk0XvOi5yWilVrTUmucXKz9yecWa6+I+HfCWIx1T92vLpJ7rqSTavx3V+JnsMf8IKkKe/QrKvNK7hOG43z3ZXav0+59OjtKlCO5SpRp7qsopJWS4JIrY7ac7Wi0m+L4HHLd/T0Y6JZyvgWNwCisnacdU1ZprU5dWKe8uKW9lp1Z3fGeIaxmIzTvJXtkm3CLf3bPN1Z5LPO1meiXs68uU5eIQAVAAAAAAAAAAAbRX3JpSs7LT8yFMXAv0qitoj2nw62FSxNWVSvFSw9GyceE5y0T6JZtcbo+eqR7XwNtdU6c4Xt697veKX6HPb2Y+nXVJcp19SxvhnZVTKWFpQ604+W/rCzOZPwDsdr5KkP5atT9Wzky2/dXTv3Ks9uTvx++Z45dk+PbcNddjB/DnZTd/NrTXJ1IpL3jFNl//d3slq6pzmufnVX7ZM5GG2tOUW/KbjBLODV/py7G8fEKTbhTnu2u1TnBX6pN5svnmz+PW9vs2WGw6jTpqOHox0UbRXdri3zZ1KlaE7ulNKXXOLfdaHgdl+JtnzTVaXlSvnGummnyZ2K2BoVY7+DxFOnPk25U5dHbOPdfQ3Oyez130qeJvE20MNCSeCqOPCpBqtTsuL3L7q/mSPluztuVPPpVLKpLfqebGUd6nNu7TnHR63z0aPrdL/8ASppfuY1OtKtTku6U912OD4hhhIp1cVsyUZSaUpU1OKf8zp5XN42T7GM8bl845tT4p42o1Qw1BSrSyioxcs9MoL+x6HYPhus2sRtTEyrVtVQU24R4+tLKXZZdzjbA8RYeDcNn0I4eEvnrVm3Z8nJ+ppcEdeO2MFCV6+JdeUtc1GHVJLNrpcXnyRvHs92/49TSx068mqPphF2lU/CmvwxXF/kT46UEoQ8xSqR+ZtptX4nAxXiB1abWGnTw9GOXmysoxikneEeKs8nktdbM8X4n26sLhlLB783KvapXrJNVWqcrqPNLLoTnfTFsnt7fa1elS9UpJSemeb6pHiNteKoRT9VrX1au+iR83r7ZxFR3lVk5N3vxKFSbbu22+pqaPfti/wDT/SbGYmVScpyd5Sbb9yuAeh5QAAAAAAAAAAAAAMmABk3pVXF3Tt2IwBejtCf8T+5LHbFRaSZzDJPGL5V2F4iq3TvZrleN+6WpXqbScpbzyd75cH05HOMjxi+VehwO1qM8sXT83KyqRyl/qStfvqXMFTlGW/gq8pQ/FTclGa7b2UjyVzeNRp3Ts+ayJ4rNlfQ8Ntza1T0wU1BO29OG77u7/Ik2tisRClP9qxavZXhBpTeeSSTeevI8PPb2JcFT86SguCdvq1qUJVG9W2+ruY/G6/m46WCjvKdnLdjnu78YZN5d9DSWJgnlSSafGUpaHNYOni5edd6r4ilJ3qLzNPRnGnZXaTX4rXevMr7X8QV8QoxnJKnB3hCKtGOVsl2OTY6mzcBSaU69aNOH8MXeb7pJ2ExiXOqKlG2mZFN5lvF4RRpwqRlvRlKpHRr5HGz91JFIrIAAAAAAAAAAAAAAAAAAAAAygABgAAZZc2R/jQ7/AKMADoeI9KfYo7G/xfZ/kAErO1fmXZfkiiwAsImzAAvz/wCEj/15/wDrgcwAIAAKAAAAAAAA/9k=' alt="AD" />
<span>Abhay</span>
<button>logout</button>
        </div>
    </div>
  )
}
