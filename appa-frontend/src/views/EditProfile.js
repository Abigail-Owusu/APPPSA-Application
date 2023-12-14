// Importing necessary components and styles for the EditProfile page
import Navbar from '../components/Navbar';
import Messages from '../components/Messages';
import '../css/EditProfile.css'
import { useProfile } from '../context/ProfileContext';
import { useState } from 'react';
import { useEffect } from 'react';
import axiosInstance from '../api/axiosInstance';
import { toast, ToastContainer } from 'react-toastify';
// import { data, error, isPending } from '../views/Profile'

/**
 * Component representing the Edit Profile Page.
 * @returns {JSX.Element} React component
 */
const EditProfile = ({ profileData, onSaveChanges, onCancelEdit }) => {
    const [formData, setFormData] = useState({
        // Define form fields with their initial values
        title: profileData.data.title || "",
        // password: "", 
        first_name: profileData.data.first_name || "",
        last_name: profileData.data.last_name || "",
        other_names: profileData.data.other_names || "",
        middle_name: profileData.data.middle_name || "",
        maiden_name: profileData.data.maiden_name || "",
        nationality: profileData.data.nationality || "",
        postal_code: profileData.data.postal_code || "",
        zip_code: profileData.data.zip_code || "",
        city: profileData.data.city || "",
        district:  profileData.data.district || "",
        country:  profileData.data.country|| "",
        profession:  profileData.data.profession || "",
        current_organization:  profileData.data.current_organization || "",
        dob:  profileData.data.dob || "",
        additonal_tel: profileData.data.additional_tel || "",
        tel_code: profileData.data.tel_code || "",
        telephone: profileData.data.telephone || "",
        first_name_next_of_kin: profileData.data.first_name_next_of_kin || "",
        last_name_next_of_kin: profileData.data.last_name_next_of_kin || "",
        year_group1:profileData.data.year_group1|| "",
        year_group2: profileData.data.year_group2 || "",
        chapter1: profileData.data.chapter1 || "",
        chapter2: profileData.data.chapter2 || "",
        chapter3: profileData.data.chapter3 || "",
        chapter4: profileData.data.chapter4 || "",
        chapter5: profileData.data.chapter5 || "",
        house1: profileData.data.house1 || "",
        house2: profileData.data.house2|| "",
        email: profileData.data.email || "",
        course_studied: profileData.data.course_studied || "",
        tel_code_next_of_kin: profileData.data.tel_code_next_of_kin || "",    
        tel_next_of_kin: profileData.data.tel_next_of_kin || "",
   
    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };

    useEffect(()=>{
        console.log({formData})
      },[formData])

    const handleSave = async(e) => {
        e.preventDefault();
        // Perform save logic

        try{
            const response = await axiosInstance.patch('api/profile/edit?email=' + formData.email, formData);

            toast.success("Profile Updated", {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 2000,
                style: {
                    width: '400px',
                },
            });

            setTimeout(() => {
                onSaveChanges();
            }, 2000);
        }

        catch(err){
            console.log(err?.response?.data)
        }
        
      };
    
      const handleCancel = () => {
        // Perform cancel logic
    
        // Call the onCancelEdit function provided by props
        onCancelEdit();
      };
    // Rendering the component
    return ( 


            // {/* Main content of the Edit Profile page */}
            <div className="editProfile-content">
                <div className="edit-title-row">
                    <h1> Edit Profile </h1>
                    <button onClick={handleCancel}> Back </button>

                </div>

                <div className="edit-fields">
                    <div className="background-photo">
                        {/* <input type="file" /> */}
                    </div>
                    <div className="userProfile-photo">
                    </div>
                    <form onSubmit={handleSave}>
                        <div className="edit-input-fields">   
                            <div className="edit-field-row">
                                <div className="edit-field">
                                    <label htmlFor="fname"> Title <span> * </span> </label>
                                    <br />
                                    <select 
                                    id="title" 
                                    name="title"
                                    value={formData.title}
                                    onChange={handleChange}
                                    
                                    >
                                        <option value="Ms">Ms</option>
                                        <option value="Mrs">Mrs</option>
                                        <option value="Dr">Dr</option>
                                        <option value="Rev">Rev</option>
                                        <option value="Prof">Prof</option>
                                        <option value="Prof">Other</option>
                                    </select>
                                </div>

                                <div className="edit-field">
                                    <label htmlFor="last_name"> First names <span> * </span> </label>
                                    <br />
                                    <input 
                                    type="text" 
                                    id='fist_name' 
                                    name='first_name'
                                    placeholder='John'
                                    value={formData.first_name}
                                    onChange={handleChange}
                                    
                                    />
                                </div>
                            </div>

                            <div className="edit-field-row">
                                <div className="edit-field">
                                    <label htmlFor="last_name"> Middle name <span> * </span> </label>
                                    <br />
                                    <input 
                                    type="text" 
                                    id='middle_name'
                                    name='middle_name'
                                    placeholder='Alvin'
                                    value={formData.middle_name}
                                    onChange={handleChange}
                                    />
                                </div>

                                <div className="edit-field">
                                    <label htmlFor="other_name"> Surname <span> * </span> </label>
                                    <br />
                                    <input 
                                    type="text" 
                                    id='last_name'
                                    name='last_name' 
                                    placeholder='Doe' 
                                    onChange={handleChange}
                                    value={formData.last_name}
                                    />
                                </div>
                            </div>

                            <div className="edit-field-row">
                                <div className="edit-field">
                                    <label htmlFor="last_name"> Maiden name (if applicable) </label>
                                    <br />
                                    <input 
                                    type="text" 
                                    id='maiden_name'
                                    name='maiden_name'
                                    placeholder='Doe'
                                    value={formData.maiden_name}
                                    onChange={handleChange}
                                    />
                                </div>

                                <div className="edit-field">
                                    <label htmlFor="other_name"> Other names </label>
                                    <br />
                                    <input 
                                    type="text" 
                                    id='other_names'
                                    name='other_names' 
                                    placeholder='Kwesi' 
                                    onChange={handleChange}
                                    value={formData.other_names}
                                    />
                                </div>
                            </div>

                            <div className="edit-field-row">
                                <div className="edit-field">
                                    <label htmlFor="nationality"> Nationality <span> * </span> </label>
                                    <br />
                                    <select 
                                    name="nationality"
                                    id='nationality'
                                    value={formData.nationality}
                                    onChange={handleChange}
                                    >
                                        {/* <option value="">-- select one --</option> */}
                                        <option value="afghan">Afghan</option>
                                        <option value="albanian">Albanian</option>
                                        <option value="algerian">Algerian</option>
                                        <option value="american">American</option>
                                        <option value="andorran">Andorran</option>
                                        <option value="angolan">Angolan</option>
                                        <option value="antiguans">Antiguans</option>
                                        <option value="argentinean">Argentinean</option>
                                        <option value="armenian">Armenian</option>
                                        <option value="australian">Australian</option>
                                        <option value="austrian">Austrian</option>
                                        <option value="azerbaijani">Azerbaijani</option>
                                        <option value="bahamian">Bahamian</option>
                                        <option value="bahraini">Bahraini</option>
                                        <option value="bangladeshi">Bangladeshi</option>
                                        <option value="barbadian">Barbadian</option>
                                        <option value="barbudans">Barbudans</option>
                                        <option value="batswana">Batswana</option>
                                        <option value="belarusian">Belarusian</option>
                                        <option value="belgian">Belgian</option>
                                        <option value="belizean">Belizean</option>
                                        <option value="beninese">Beninese</option>
                                        <option value="bhutanese">Bhutanese</option>
                                        <option value="bolivian">Bolivian</option>
                                        <option value="bosnian">Bosnian</option>
                                        <option value="brazilian">Brazilian</option>
                                        <option value="british">British</option>
                                        <option value="bruneian">Bruneian</option>
                                        <option value="bulgarian">Bulgarian</option>
                                        <option value="burkinabe">Burkinabe</option>
                                        <option value="burmese">Burmese</option>
                                        <option value="burundian">Burundian</option>
                                        <option value="cambodian">Cambodian</option>
                                        <option value="cameroonian">Cameroonian</option>
                                        <option value="canadian">Canadian</option>
                                        <option value="cape verdean">Cape Verdean</option>
                                        <option value="central african">Central African</option>
                                        <option value="chadian">Chadian</option>
                                        <option value="chilean">Chilean</option>
                                        <option value="chinese">Chinese</option>
                                        <option value="colombian">Colombian</option>
                                        <option value="comoran">Comoran</option>
                                        <option value="congolese">Congolese</option>
                                        <option value="costa rican">Costa Rican</option>
                                        <option value="croatian">Croatian</option>
                                        <option value="cuban">Cuban</option>
                                        <option value="cypriot">Cypriot</option>
                                        <option value="czech">Czech</option>
                                        <option value="danish">Danish</option>
                                        <option value="djibouti">Djibouti</option>
                                        <option value="dominican">Dominican</option>
                                        <option value="dutch">Dutch</option>
                                        <option value="east timorese">East Timorese</option>
                                        <option value="ecuadorean">Ecuadorean</option>
                                        <option value="egyptian">Egyptian</option>
                                        <option value="emirian">Emirian</option>
                                        <option value="equatorial guinean">Equatorial Guinean</option>
                                        <option value="eritrean">Eritrean</option>
                                        <option value="estonian">Estonian</option>
                                        <option value="ethiopian">Ethiopian</option>
                                        <option value="fijian">Fijian</option>
                                        <option value="filipino">Filipino</option>
                                        <option value="finnish">Finnish</option>
                                        <option value="french">French</option>
                                        <option value="gabonese">Gabonese</option>
                                        <option value="gambian">Gambian</option>
                                        <option value="georgian">Georgian</option>
                                        <option value="german">German</option>
                                        <option value="ghanaian">Ghanaian</option>
                                        <option value="greek">Greek</option>
                                        <option value="grenadian">Grenadian</option>
                                        <option value="guatemalan">Guatemalan</option>
                                        <option value="guinea-bissauan">Guinea-Bissauan</option>
                                        <option value="guinean">Guinean</option>
                                        <option value="guyanese">Guyanese</option>
                                        <option value="haitian">Haitian</option>
                                        <option value="herzegovinian">Herzegovinian</option>
                                        <option value="honduran">Honduran</option>
                                        <option value="hungarian">Hungarian</option>
                                        <option value="icelander">Icelander</option>
                                        <option value="indian">Indian</option>
                                        <option value="indonesian">Indonesian</option>
                                        <option value="iranian">Iranian</option>
                                        <option value="iraqi">Iraqi</option>
                                        <option value="irish">Irish</option>
                                        <option value="israeli">Israeli</option>
                                        <option value="italian">Italian</option>
                                        <option value="ivorian">Ivorian</option>
                                        <option value="jamaican">Jamaican</option>
                                        <option value="japanese">Japanese</option>
                                        <option value="jordanian">Jordanian</option>
                                        <option value="kazakhstani">Kazakhstani</option>
                                        <option value="kenyan">Kenyan</option>
                                        <option value="kittian and nevisian">Kittian and Nevisian</option>
                                        <option value="kuwaiti">Kuwaiti</option>
                                        <option value="kyrgyz">Kyrgyz</option>
                                        <option value="laotian">Laotian</option>
                                        <option value="latvian">Latvian</option>
                                        <option value="lebanese">Lebanese</option>
                                        <option value="liberian">Liberian</option>
                                        <option value="libyan">Libyan</option>
                                        <option value="liechtensteiner">Liechtensteiner</option>
                                        <option value="lithuanian">Lithuanian</option>
                                        <option value="luxembourger">Luxembourger</option>
                                        <option value="macedonian">Macedonian</option>
                                        <option value="malagasy">Malagasy</option>
                                        <option value="malawian">Malawian</option>
                                        <option value="malaysian">Malaysian</option>
                                        <option value="maldivan">Maldivan</option>
                                        <option value="malian">Malian</option>
                                        <option value="maltese">Maltese</option>
                                        <option value="marshallese">Marshallese</option>
                                        <option value="mauritanian">Mauritanian</option>
                                        <option value="mauritian">Mauritian</option>
                                        <option value="mexican">Mexican</option>
                                        <option value="micronesian">Micronesian</option>
                                        <option value="moldovan">Moldovan</option>
                                        <option value="monacan">Monacan</option>
                                        <option value="mongolian">Mongolian</option>
                                        <option value="moroccan">Moroccan</option>
                                        <option value="mosotho">Mosotho</option>
                                        <option value="motswana">Motswana</option>
                                        <option value="mozambican">Mozambican</option>
                                        <option value="namibian">Namibian</option>
                                        <option value="nauruan">Nauruan</option>
                                        <option value="nepalese">Nepalese</option>
                                        <option value="new zealander">New Zealander</option>
                                        <option value="ni-vanuatu">Ni-Vanuatu</option>
                                        <option value="nicaraguan">Nicaraguan</option>
                                        <option value="nigerien">Nigerien</option>
                                        <option value="north korean">North Korean</option>
                                        <option value="northern irish">Northern Irish</option>
                                        <option value="norwegian">Norwegian</option>
                                        <option value="omani">Omani</option>
                                        <option value="pakistani">Pakistani</option>
                                        <option value="palauan">Palauan</option>
                                        <option value="panamanian">Panamanian</option>
                                        <option value="papua new guinean">Papua New Guinean</option>
                                        <option value="paraguayan">Paraguayan</option>
                                        <option value="peruvian">Peruvian</option>
                                        <option value="polish">Polish</option>
                                        <option value="portuguese">Portuguese</option>
                                        <option value="qatari">Qatari</option>
                                        <option value="romanian">Romanian</option>
                                        <option value="russian">Russian</option>
                                        <option value="rwandan">Rwandan</option>
                                        <option value="saint lucian">Saint Lucian</option>
                                        <option value="salvadoran">Salvadoran</option>
                                        <option value="samoan">Samoan</option>
                                        <option value="san marinese">San Marinese</option>
                                        <option value="sao tomean">Sao Tomean</option>
                                        <option value="saudi">Saudi</option>
                                        <option value="scottish">Scottish</option>
                                        <option value="senegalese">Senegalese</option>
                                        <option value="serbian">Serbian</option>
                                        <option value="seychellois">Seychellois</option>
                                        <option value="sierra leonean">Sierra Leonean</option>
                                        <option value="singaporean">Singaporean</option>
                                        <option value="slovakian">Slovakian</option>
                                        <option value="slovenian">Slovenian</option>
                                        <option value="solomon islander">Solomon Islander</option>
                                        <option value="somali">Somali</option>
                                        <option value="south african">South African</option>
                                        <option value="south korean">South Korean</option>
                                        <option value="spanish">Spanish</option>
                                        <option value="sri lankan">Sri Lankan</option>
                                        <option value="sudanese">Sudanese</option>
                                        <option value="surinamer">Surinamer</option>
                                        <option value="swazi">Swazi</option>
                                        <option value="swedish">Swedish</option>
                                        <option value="swiss">Swiss</option>
                                        <option value="syrian">Syrian</option>
                                        <option value="taiwanese">Taiwanese</option>
                                        <option value="tajik">Tajik</option>
                                        <option value="tanzanian">Tanzanian</option>
                                        <option value="thai">Thai</option>
                                        <option value="togolese">Togolese</option>
                                        <option value="tongan">Tongan</option>
                                        <option value="trinidadian or tobagonian">Trinidadian or Tobagonian</option>
                                        <option value="tunisian">Tunisian</option>
                                        <option value="turkish">Turkish</option>
                                        <option value="tuvaluan">Tuvaluan</option>
                                        <option value="ugandan">Ugandan</option>
                                        <option value="ukrainian">Ukrainian</option>
                                        <option value="uruguayan">Uruguayan</option>
                                        <option value="uzbekistani">Uzbekistani</option>
                                        <option value="venezuelan">Venezuelan</option>
                                        <option value="vietnamese">Vietnamese</option>
                                        <option value="welsh">Welsh</option>
                                        <option value="yemenite">Yemenite</option>
                                        <option value="zambian">Zambian</option>
                                        <option value="zimbabwean">Zimbabwean</option>
                                    </select>
                                </div>

                                <div className="edit-field">
                                    <label htmlFor="postal_code"> Address (Postal Code) <span> * </span> </label>
                                    <br />
                                    <input 
                                    type="text" 
                                    id='postal_code' 
                                    name='postal_code'
                                    placeholder='10001'
                                    value={formData.postal_code} 
                                    onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="edit-field-row">
                                <div className="edit-field">
                                    <label htmlFor="zip_code"> Address (zip code) <span> * </span> </label>
                                    <br />
                                    <input 
                                    type="text" 
                                    id='zip_code'
                                    name='zip_code'
                                    onChange = {handleChange}
                                    value = {formData.zip_code}
                                    placeholder='0000'/>
                                </div>

                                <div className="edit-field">
                                    <label htmlFor="city"> Address (City/Town) <span> * </span> </label>
                                    <br />
                                    <input type="text" 
                                    id='city' 
                                    name='city'
                                    placeholder='Greater Accra'
                                    value={formData.city}
                                    onChange={handleChange} 
                                    />
                                </div>
                            </div>

                            <div className="edit-field-row">
                                <div className="edit-field">
                                    <label htmlFor="district"> Address (District) <span> * </span> </label>
                                    <br />
                                    <input type="text" 
                                    id='district'
                                    name='district'
                                    placeholder='Accra'
                                    value={formData.district}
                                    onChange={handleChange}
                                    />
                                </div>

                                <div className="edit-field">
                                    <label htmlFor="country"> Address (Country) <span> * </span> </label>
                                    <br />
                                    <select 
                                    id="country" 
                                    name="country"
                                    value={formData.country}
                                    onChange={handleChange}
                                    >
                                        <option value="Afghanistan">Afghanistan</option>
                                        <option value="Åland Islands">Åland Islands</option>
                                        <option value="Albania">Albania</option>
                                        <option value="Algeria">Algeria</option>
                                        <option value="American Samoa">American Samoa</option>
                                        <option value="Andorra">Andorra</option>
                                        <option value="Angola">Angola</option>
                                        <option value="Anguilla">Anguilla</option>
                                        <option value="Antarctica">Antarctica</option>
                                        <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                                        <option value="Argentina">Argentina</option>
                                        <option value="Armenia">Armenia</option>
                                        <option value="Aruba">Aruba</option>
                                        <option value="Australia">Australia</option>
                                        <option value="Austria">Austria</option>
                                        <option value="Azerbaijan">Azerbaijan</option>
                                        <option value="Bahamas">Bahamas</option>
                                        <option value="Bahrain">Bahrain</option>
                                        <option value="Bangladesh">Bangladesh</option>
                                        <option value="Barbados">Barbados</option>
                                        <option value="Belarus">Belarus</option>
                                        <option value="Belgium">Belgium</option>
                                        <option value="Belize">Belize</option>
                                        <option value="Benin">Benin</option>
                                        <option value="Bermuda">Bermuda</option>
                                        <option value="Bhutan">Bhutan</option>
                                        <option value="Bolivia">Bolivia</option>
                                        <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                                        <option value="Botswana">Botswana</option>
                                        <option value="Bouvet Island">Bouvet Island</option>
                                        <option value="Brazil">Brazil</option>
                                        <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
                                        <option value="Brunei Darussalam">Brunei Darussalam</option>
                                        <option value="Bulgaria">Bulgaria</option>
                                        <option value="Burkina Faso">Burkina Faso</option>
                                        <option value="Burundi">Burundi</option>
                                        <option value="Cambodia">Cambodia</option>
                                        <option value="Cameroon">Cameroon</option>
                                        <option value="Canada">Canada</option>
                                        <option value="Cape Verde">Cape Verde</option>
                                        <option value="Cayman Islands">Cayman Islands</option>
                                        <option value="Central African Republic">Central African Republic</option>
                                        <option value="Chad">Chad</option>
                                        <option value="Chile">Chile</option>
                                        <option value="China">China</option>
                                        <option value="Christmas Island">Christmas Island</option>
                                        <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
                                        <option value="Colombia">Colombia</option>
                                        <option value="Comoros">Comoros</option>
                                        <option value="Congo">Congo</option>
                                        <option value="Congo, The Democratic Republic of The">Congo, The Democratic Republic of The</option>
                                        <option value="Cook Islands">Cook Islands</option>
                                        <option value="Costa Rica">Costa Rica</option>
                                        <option value="Cote D'ivoire">Cote D'ivoire</option>
                                        <option value="Croatia">Croatia</option>
                                        <option value="Cuba">Cuba</option>
                                        <option value="Cyprus">Cyprus</option>
                                        <option value="Czech Republic">Czech Republic</option>
                                        <option value="Denmark">Denmark</option>
                                        <option value="Djibouti">Djibouti</option>
                                        <option value="Dominica">Dominica</option>
                                        <option value="Dominican Republic">Dominican Republic</option>
                                        <option value="Ecuador">Ecuador</option>
                                        <option value="Egypt">Egypt</option>
                                        <option value="El Salvador">El Salvador</option>
                                        <option value="Equatorial Guinea">Equatorial Guinea</option>
                                        <option value="Eritrea">Eritrea</option>
                                        <option value="Estonia">Estonia</option>
                                        <option value="Ethiopia">Ethiopia</option>
                                        <option value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option>
                                        <option value="Faroe Islands">Faroe Islands</option>
                                        <option value="Fiji">Fiji</option>
                                        <option value="Finland">Finland</option>
                                        <option value="France">France</option>
                                        <option value="French Guiana">French Guiana</option>
                                        <option value="French Polynesia">French Polynesia</option>
                                        <option value="French Southern Territories">French Southern Territories</option>
                                        <option value="Gabon">Gabon</option>
                                        <option value="Gambia">Gambia</option>
                                        <option value="Georgia">Georgia</option>
                                        <option value="Germany">Germany</option>
                                        <option value="Ghana">Ghana</option>
                                        <option value="Gibraltar">Gibraltar</option>
                                        <option value="Greece">Greece</option>
                                        <option value="Greenland">Greenland</option>
                                        <option value="Grenada">Grenada</option>
                                        <option value="Guadeloupe">Guadeloupe</option>
                                        <option value="Guam">Guam</option>
                                        <option value="Guatemala">Guatemala</option>
                                        <option value="Guernsey">Guernsey</option>
                                        <option value="Guinea">Guinea</option>
                                        <option value="Guinea-bissau">Guinea-bissau</option>
                                        <option value="Guyana">Guyana</option>
                                        <option value="Haiti">Haiti</option>
                                        <option value="Heard Island and Mcdonald Islands">Heard Island and Mcdonald Islands</option>
                                        <option value="Holy See (Vatican City State)">Holy See (Vatican City State)</option>
                                        <option value="Honduras">Honduras</option>
                                        <option value="Hong Kong">Hong Kong</option>
                                        <option value="Hungary">Hungary</option>
                                        <option value="Iceland">Iceland</option>
                                        <option value="India">India</option>
                                        <option value="Indonesia">Indonesia</option>
                                        <option value="Iran, Islamic Republic of">Iran, Islamic Republic of</option>
                                        <option value="Iraq">Iraq</option>
                                        <option value="Ireland">Ireland</option>
                                        <option value="Isle of Man">Isle of Man</option>
                                        <option value="Israel">Israel</option>
                                        <option value="Italy">Italy</option>
                                        <option value="Jamaica">Jamaica</option>
                                        <option value="Japan">Japan</option>
                                        <option value="Jersey">Jersey</option>
                                        <option value="Jordan">Jordan</option>
                                        <option value="Kazakhstan">Kazakhstan</option>
                                        <option value="Kenya">Kenya</option>
                                        <option value="Kiribati">Kiribati</option>
                                        <option value="Korea, Democratic People's Republic of">Korea, Democratic People's Republic of</option>
                                        <option value="Korea, Republic of">Korea, Republic of</option>
                                        <option value="Kuwait">Kuwait</option>
                                        <option value="Kyrgyzstan">Kyrgyzstan</option>
                                        <option value="Lao People's Democratic Republic">Lao People's Democratic Republic</option>
                                        <option value="Latvia">Latvia</option>
                                        <option value="Lebanon">Lebanon</option>
                                        <option value="Lesotho">Lesotho</option>
                                        <option value="Liberia">Liberia</option>
                                        <option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
                                        <option value="Liechtenstein">Liechtenstein</option>
                                        <option value="Lithuania">Lithuania</option>
                                        <option value="Luxembourg">Luxembourg</option>
                                        <option value="Macao">Macao</option>
                                        <option value="Macedonia, The Former Yugoslav Republic of">Macedonia, The Former Yugoslav Republic of</option>
                                        <option value="Madagascar">Madagascar</option>
                                        <option value="Malawi">Malawi</option>
                                        <option value="Malaysia">Malaysia</option>
                                        <option value="Maldives">Maldives</option>
                                        <option value="Mali">Mali</option>
                                        <option value="Malta">Malta</option>
                                        <option value="Marshall Islands">Marshall Islands</option>
                                        <option value="Martinique">Martinique</option>
                                        <option value="Mauritania">Mauritania</option>
                                        <option value="Mauritius">Mauritius</option>
                                        <option value="Mayotte">Mayotte</option>
                                        <option value="Mexico">Mexico</option>
                                        <option value="Micronesia, Federated States of">Micronesia, Federated States of</option>
                                        <option value="Moldova, Republic of">Moldova, Republic of</option>
                                        <option value="Monaco">Monaco</option>
                                        <option value="Mongolia">Mongolia</option>
                                        <option value="Montenegro">Montenegro</option>
                                        <option value="Montserrat">Montserrat</option>
                                        <option value="Morocco">Morocco</option>
                                        <option value="Mozambique">Mozambique</option>
                                        <option value="Myanmar">Myanmar</option>
                                        <option value="Namibia">Namibia</option>
                                        <option value="Nauru">Nauru</option>
                                        <option value="Nepal">Nepal</option>
                                        <option value="Netherlands">Netherlands</option>
                                        <option value="Netherlands Antilles">Netherlands Antilles</option>
                                        <option value="New Caledonia">New Caledonia</option>
                                        <option value="New Zealand">New Zealand</option>
                                        <option value="Nicaragua">Nicaragua</option>
                                        <option value="Niger">Niger</option>
                                        <option value="Nigeria">Nigeria</option>
                                        <option value="Niue">Niue</option>
                                        <option value="Norfolk Island">Norfolk Island</option>
                                        <option value="Northern Mariana Islands">Northern Mariana Islands</option>
                                        <option value="Norway">Norway</option>
                                        <option value="Oman">Oman</option>
                                        <option value="Pakistan">Pakistan</option>
                                        <option value="Palau">Palau</option>
                                        <option value="Palestinian Territory, Occupied">Palestinian Territory, Occupied</option>
                                        <option value="Panama">Panama</option>
                                        <option value="Papua New Guinea">Papua New Guinea</option>
                                        <option value="Paraguay">Paraguay</option>
                                        <option value="Peru">Peru</option>
                                        <option value="Philippines">Philippines</option>
                                        <option value="Pitcairn">Pitcairn</option>
                                        <option value="Poland">Poland</option>
                                        <option value="Portugal">Portugal</option>
                                        <option value="Puerto Rico">Puerto Rico</option>
                                        <option value="Qatar">Qatar</option>
                                        <option value="Reunion">Reunion</option>
                                        <option value="Romania">Romania</option>
                                        <option value="Russian Federation">Russian Federation</option>
                                        <option value="Rwanda">Rwanda</option>
                                        <option value="Saint Helena">Saint Helena</option>
                                        <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                                        <option value="Saint Lucia">Saint Lucia</option>
                                        <option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
                                        <option value="Saint Vincent and The Grenadines">Saint Vincent and The Grenadines</option>
                                        <option value="Samoa">Samoa</option>
                                        <option value="San Marino">San Marino</option>
                                        <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                                        <option value="Saudi Arabia">Saudi Arabia</option>
                                        <option value="Senegal">Senegal</option>
                                        <option value="Serbia">Serbia</option>
                                        <option value="Seychelles">Seychelles</option>
                                        <option value="Sierra Leone">Sierra Leone</option>
                                        <option value="Singapore">Singapore</option>
                                        <option value="Slovakia">Slovakia</option>
                                        <option value="Slovenia">Slovenia</option>
                                        <option value="Solomon Islands">Solomon Islands</option>
                                        <option value="Somalia">Somalia</option>
                                        <option value="South Africa">South Africa</option>
                                        <option value="South Georgia and The South Sandwich Islands">South Georgia and The South Sandwich Islands</option>
                                        <option value="Spain">Spain</option>
                                        <option value="Sri Lanka">Sri Lanka</option>
                                        <option value="Sudan">Sudan</option>
                                        <option value="Suriname">Suriname</option>
                                        <option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
                                        <option value="Swaziland">Swaziland</option>
                                        <option value="Sweden">Sweden</option>
                                        <option value="Switzerland">Switzerland</option>
                                        <option value="Syrian Arab Republic">Syrian Arab Republic</option>
                                        <option value="Taiwan">Taiwan</option>
                                        <option value="Tajikistan">Tajikistan</option>
                                        <option value="Tanzania, United Republic of">Tanzania, United Republic of</option>
                                        <option value="Thailand">Thailand</option>
                                        <option value="Timor-leste">Timor-leste</option>
                                        <option value="Togo">Togo</option>
                                        <option value="Tokelau">Tokelau</option>
                                        <option value="Tonga">Tonga</option>
                                        <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                                        <option value="Tunisia">Tunisia</option>
                                        <option value="Turkey">Turkey</option>
                                        <option value="Turkmenistan">Turkmenistan</option>
                                        <option value="Turks and Caicos Islands">Turks and Caicos Islands</option>
                                        <option value="Tuvalu">Tuvalu</option>
                                        <option value="Uganda">Uganda</option>
                                        <option value="Ukraine">Ukraine</option>
                                        <option value="United Arab Emirates">United Arab Emirates</option>
                                        <option value="United Kingdom">United Kingdom</option>
                                        <option value="United States">United States</option>
                                        <option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
                                        <option value="Uruguay">Uruguay</option>
                                        <option value="Uzbekistan">Uzbekistan</option>
                                        <option value="Vanuatu">Vanuatu</option>
                                        <option value="Venezuela">Venezuela</option>
                                        <option value="Viet Nam">Viet Nam</option>
                                        <option value="Virgin Islands, British">Virgin Islands, British</option>
                                        <option value="Virgin Islands, U.S.">Virgin Islands, U.S.</option>
                                        <option value="Wallis and Futuna">Wallis and Futuna</option>
                                        <option value="Western Sahara">Western Sahara</option>
                                        <option value="Yemen">Yemen</option>
                                        <option value="Zambia">Zambia</option>
                                        <option value="Zimbabwe">Zimbabwe</option>
                                    </select>
                                </div>
                            </div>
                            <div className="edit-field-row">
                                <div className="edit-field">
                                    <label htmlFor="profession"> Profession <span> * </span> </label>
                                    <br />
                                    <input 
                                    type="text" 
                                    id='profession'
                                    name='profession'
                                    placeholder='Lawyer'
                                    value={formData.profession}
                                    onChange={handleChange}
                                    />
                                </div>

                                <div className="edit-field">
                                    <label htmlFor="lname"> Current Organization (If Applicable) </label>
                                    <br />
                                    <input 
                                    type="text" 
                                    id='current_organization' 
                                    name='current_organization'
                                    placeholder='Kwesi' 
                                    value={formData.current_organization}
                                    onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="edit-field-row">
                                <div className="edit-field">
                                    <label htmlFor="dob"> Date of Birth <span> * </span> </label>
                                    <br />
                                    <input 
                                    type="date" 
                                    id='dob'
                                    name='dob'
                                    value={formData.dob}
                                    onChange={handleChange}
                                    />

                                </div>

                                <div className="edit-field">
                                    <label htmlFor="telephone"> Telephone No. (Country code) <span> * </span> </label>
                                    <br />
                                    <input t
                                    ype="text" 
                                    id='tel_code' 
                                    placeholder='+233' 
                                    name='tel_code'
                                    onChange={handleChange}
                                    value={formData.tel_code}
                                    />
                                </div>
                            </div>

                            <div className="edit-field-row">
                                <div className="edit-field">
                                    <label htmlFor="telephone"> Telephone number <span> * </span> </label>
                                    <br />
                                    <input 
                                    type="text" 
                                    id='telephone'
                                    name='telephone' 
                                    placeholder='0244718892'
                                    onChange={handleChange}
                                    value={formData.telephone}

                                    />
                                </div>

                                <div className="edit-field">
                                    <label htmlFor="additional_tel"> Additional number </label>
                                    <br />
                                    <input 
                                    type="text" 
                                    id='additonal_tel' 
                                    name='additonal_tel'
                                    placeholder='0244651691' 
                                    value={formData.additonal_tel}
                                    onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="edit-field-row">
                                <div className="edit-field">
                                    <label htmlFor="email"> Email <span> * </span> </label>
                                    <br />
                                    <input 
                                    type="text" 
                                    id='email' 
                                    name='email'
                                    placeholder='jane.doe@example.com'
                                    onChange={handleChange}
                                    value={formData.email}
                                    />
                                </div>

                                <div className="edit-field">
                                    <label htmlFor="email">  Course studied <span> * </span> </label>
                                    <br />
                                    <input type="text" 
                                    id='course_studied' 
                                    name='course_studied'
                                    placeholder='Science'
                                    // value={formData.course_studied}
                                    // onChange={handleChange}
                                     />
                                </div>
                            </div>

                            <div className="edit-field-row">
                                <div className="edit-field">
                                    <label htmlFor="first_name_next_of_kin"> Next of kin first name <span> * </span></label>
                                    <br />
                                    <input 
                                    type="text" 
                                    id='first_name_next_of_kin' 
                                    name='first_name_next_of_kin'
                                    placeholder='John'
                                    onChange={handleChange}
                                    value={formData.first_name_next_of_kin}
                                    />
                                </div>

                                <div className="edit-field">
                                    <label htmlFor="last_name_next_of_kin">  Next of kin last name <span> * </span> </label>
                                    <br />
                                    <input type="text" 
                                    id='last_name_next_of_kin' 
                                    name='last_name_next_of_kin'
                                    placeholder='Doe'
                                    value={formData.last_name_next_of_kin}
                                    onChange={handleChange}
                                     />
                                </div>
                            </div>

                            <div className="edit-field-row">
                                <div className="edit-field">
                                    <label htmlFor="tel_next_kin"> Next of Kin Contact (Country Code) <span> * </span> </label>
                                    <br />
                                    <input 
                                    type="text" 
                                    id='tel_code_next_of_kin' 
                                    name='tel_code_next_of_kin'
                                    // value={formData.tel_code_next_of_kin}
                                    // onChange={handleChange}
                                    placeholder='+233'/>
                                </div>

                                <div className="edit-field">
                                    <label htmlFor="year_group2"> Next of Kin Contact No. <span> * </span> </label>
                                    <br />
                                    <input type="text" 
                                    id='tel_next_of_kin' 
                                    onChange={handleChange}
                                    value={formData.tel_next_of_kin}
                                    name='tel_next_of_kin'
                                    placeholder='0255181901' />
                                </div>
                            </div>

                            

                            <div className="edit-field-row">
                                <div className="edit-field">
                                    <label htmlFor="year_group1"> Year group 1 (eg. 1980) <span> * </span> </label>
                                    <br />
                                    <input 
                                    type="text" 
                                    id='year_group1' 
                                    name='year_group1'
                                    value={formData.year_group1}
                                    onChange={handleChange}
                                    placeholder='1980'/>
                                </div>

                                <div className="edit-field">
                                    <label htmlFor="year_group2"> Year group 2 (eg. 1982) <span> * </span> </label>
                                    <br />
                                    <input type="text" 
                                    id='year_group2' 
                                    name='year_group2'
                                    placeholder='1982' 
                                    onChange={handleChange}
                                    value={formData.year_group2}
                                    />
                                </div>
                            </div>

                            <div className="edit-field-row">
                                <div className="edit-field">
                                    <label htmlFor="chapter1"> Chapter 1 (eg. Accra) <span> * </span> </label>
                                    <br />
                                    <input type="text" 
                                    id='chapter1' 
                                    name='chapter1' 
                                    placeholder='Accra'
                                    value={formData.chapter1}
                                    onChange={handleChange}/>
                                </div>

                                <div className="edit-field">
                                    <label htmlFor="chapter2"> Chapter 2 (eg. UK) <span> * </span> </label>
                                    <br />
                                    <input 
                                    type="text" 
                                    id='chapter2' 
                                    name='chapter2'
                                    placeholder='UK'
                                    value={formData.chapter2}
                                    onChange={handleChange}
                                     />
                                </div>
                            </div>

                            <div className="edit-field-row">
                                <div className="edit-field">
                                    <label htmlFor="chapter3"> Chapter 3 (eg. Takoradi) <span> * </span> </label>
                                    <br />
                                    <input 
                                    type="text" 
                                    id='chapter3' 
                                    name='chapter3' 
                                    placeholder='Takoradi'
                                    value={formData.chapter3}
                                    onChange={handleChange}

                                    />
                                </div>

                                <div className="edit-field">
                                    <label htmlFor="chapter4"> Chapter 4 <span> * </span> </label>
                                    <br />
                                    <input 
                                    type="text" 
                                    id='chapter4' 
                                    name='chapter4' 
                                    placeholder='UK'
                                    // value={formData.chapter4}
                                    // onChange={handleChange}
                                     />
                                </div>
                            </div>

                            <div className="edit-field-row">
                                <div className="edit-field">
                                    <label htmlFor="chapter5"> Chapter 5 <span> * </span> </label>
                                    <br />
                                    <input type="text" 
                                    id='chapter5' 
                                    name='chapter5'
                                    // value = {formData.chapter5}
                                    // onChange={handleChange}
                                    placeholder='Takoradi'/>
                                </div>

                                <div className="edit-field">
                                    <label htmlFor="house1"> House 1 (eg. Jude) <span> * </span> </label>
                                    <br />
                                    <input type="text" 
                                    id='house1'
                                    name='house1' 
                                    placeholder='UK'
                                    value={formData.house1}
                                    onChange={handleChange}
                                     />
                                </div>
                            </div>

                            <div className="edit-field-row">
                                <div className="edit-field">
                                    <label htmlFor="house2"> House 2 (eg. Louis) <span> * </span> </label>
                                    <br />
                                    <input type="text" 
                                    id='house2'
                                    name='house2'
                                    placeholder='Takoradi'
                                    value={formData.house2}
                                    onChange={handleChange}
                                    />
                                </div>

                            </div>

                            <div className="edit-field-row">
                                <button> Edit </button>
                            </div>
                            <ToastContainer />

                            <br />
                            <br />
                            <br />
                            <br />


                            <br />
                            <br />
                            <br />
                            <br />

                        </div>

                    </form>

                </div>

            </div>

    );
}

// Exporting the component for use in other files
export default EditProfile;