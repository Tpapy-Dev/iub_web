

const Modal=({closeModal, newStudent, setNewStudent, submit})=>{

    return(
        <section id='modal' className="hidden w-[100vw] h-[100vh] top-0 z-30 fixed bg-modalBg items-center justify-center">
            <div className="relative bg-white rounded-md shadow-lg w-[90vw] md:w-[500px] py-8 px-4">
                <form onSubmit={submit} method="post" className="relative flex justify-center">
                    <div className="flex flex-col space-y-5">
                        <span className="flex flex-row justify-between items-center  mb-5">
                            <h2 className="font-bold text-2xl md:text-3xl">Add Student Record</h2>
                            <button onClick={closeModal} type='reset' className="text-4xl">
                                &#215;
                            </button>
                        </span>
                        <hr/>

                        <div className="flex flex-col space-y-2 items-start ">
                            <label htmlFor="name" className="block text-sm font-medium"> Student Name </label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Student Name"
                                value={newStudent.name}
                                onChange={e=>setNewStudent({...newStudent, name:e.target.value})}
                                className="w-[80vw] md:w-[400px] px-4 py-3 text-sm border border-slate-700 rounded-md focus:outline-none focus:ring-1 focus:ring-slate-900"
                                required
                            />
                        </div>


                        <div className="flex flex-row items-center space-x-2 space-y-0">
                            <div className="space-y-2">
                                <label htmlFor="date" className="block text-sm font-medium"> Student DOB </label>
                                <input
                                    type="date"
                                    name="date"
                                    value={newStudent.dob}
                                    onChange={e=>setNewStudent({...newStudent, dob:e.target.value})}
                                    className="w-[39vw] md:w-[197px] px-4 py-3 text-sm border border-slate-700 rounded-md focus:outline-none focus:ring-1 focus:ring-slate-900"
                                    required
                                />
                            </div>
                            <div className="flex flex-col space-y-2 items-start ">
                                <label htmlFor="text" className="block text-sm font-medium"> Student Gender </label>
                                <select name='gender' onChange={e=>setNewStudent({...newStudent, gender:e.target.value})} value={newStudent.gender} className="w-[39vw] md:w-[197px] px-4 py-3 text-sm border border-slate-700 rounded-md focus:outline-none focus:ring-1 focus:ring-slate-900">
                                    <option>Student Gender</option>
                                    <option value='Male'>Male</option>
                                    <option value='Female'>Female</option>
                                </select>
                            </div>
                        </div>

                        <div className="flex flex-col space-y-2 items-start ">
                            <label htmlFor="department" className="block text-sm font-medium"> Department </label>
                            <input
                                type='text'
                                placeholder='Course of Study'
                                name='department'
                                onChange={e=>setNewStudent({...newStudent, dept:e.target.value})}
                                value={newStudent.dept}
                                list = 'courseList'
                                className="w-[80vw] md:w-[400px] px-4 py-3 text-sm border border-slate-700 rounded-md focus:outline-none focus:ring-1 focus:ring-slate-900"
                            />
                            <datalist id='courseList'>
                                <option value='ACCOUNTING'>ACCOUNTING</option>
                                <option value='AGRICULTURAL ECONOMICS'>AGRICULTURAL ECONOMICS</option>
                                <option value='BANKING AND FINANCE'>BANKING AND FINANCE</option>
                                <option value='BUSINESS ADMINISTRATION'>BUSINESS ADMINISTRATION</option>
                                <option value='COMPUTER SCIENCE'>COMPUTER SCIENCE</option>
                                <option value='COMPUTER ENGINEERING'>COMPUTER ENGINEERING</option>
                                <option value='ECONOMICS'>ECONOMICS</option>
                                <option value='ENVIRONMENTAL SCIENCE'>ENVIRONMENTAL SCIENCE</option>
                                <option value='HEALTH INFORMATION MANAGEMENT'>HEALTH INFORMATION MANAGEMENT</option>
                                <option value='HOTEL MANAGEMENT'>HOTEL MANAGEMENT</option>
                                <option value='HUMAN RESOURCE MANAGEMENT'>HUMAN RESOURCE MANAGEMENT</option>
                                <option value='INFORMATION COMMUNICATION TECHNOLOGY'>INFORMATION COMMUNICATION TECHNOLOGY</option>
                                <option value='INSURANCE AND RISK MANAGEMENT'>INSURANCE AND RISK MANAGEMENT</option>
                                <option value='INTERNATIONAL RELATIONS'>INTERNATIONAL RELATIONS</option>
                                <option value='LAW'>LAW</option>
                                <option value='LINGUISTICS (English)'>LINGUISTICS (English)</option>
                                <option value='LINGUISTICS (French)'>LINGUISTICS (French)</option>
                                <option value='MASS COMMUNICATION'>MASS COMMUNICATION</option>
                                <option value='MANAGEMENT INFORMATION TECHNOLOGY'>MANAGEMENT INFORMATION TECHNOLOGY</option>
                                <option value='MARKETING'>MARKETING</option>
                                <option value='MICROBIOLOGY'>MICROBIOLOGY</option>
                                <option value='NURSING'>NURSING</option>
                                <option value='PHARMACY'>PHARMACY</option>
                                <option value='PHILOSOPHY'>PHILOSOPHY</option>
                                <option value='POLITICAL SCIENCE'>POLITICAL SCIENCE</option>
                                <option value='PSYCHOLOGY'>PSYCHOLOGY</option>
                                <option value='SAFETY AND DISASTER MANAGEMENT'>SAFETY AND DISASTER MANAGEMENT</option>
                                <option value='SAFETY AND HEALTH MANAGEMENT'>SAFETY AND HEALTH MANAGEMENT</option>
                                <option value='SAFETY AND RISK MANAGEMENT'>SAFETY AND RISK MANAGEMENT</option>
                                <option value='SOCIOLOGY'>SOCIOLOGY</option>
                                <option value='TOURISM'>TOURISM</option>
                                <option value='TOURISM AND HOTEL MANAGEMENT'>TOURISM AND HOTEL MANAGEMENT</option>
                                <option value='TRANSPORT AND LOGISTICS MANAGEMENT'>TRANSPORT AND LOGISTICS MANAGEMENT</option>
                            </datalist>
                        </div>

                        <div className="flex flex-col space-y-2 items-start">
                            <label htmlFor="matric" className="block text-sm font-medium"> Matric No. </label>
                            <input
                                type="text"
                                name="matric"
                                placeholder="Matric Number"
                                value={newStudent.matric}
                                onChange={e=>setNewStudent({...newStudent, matric:e.target.value})}
                                className="w-[80vw] md:w-[400px] px-4 py-3 text-sm border border-slate-700 rounded-md focus:outline-none focus:ring-1 focus:ring-slate-900"
                                required
                            />
                        </div>

                        <div className="flex flex-row items-center space-x-2 space-y-0">
                            <div className="space-y-2">
                                <label htmlFor="level" className="block text-sm font-medium"> Graduation Year </label>
                                <input
                                    type="text"
                                    name="grad"
                                    placeholder="Graduation Year"
                                    value={newStudent.year}
                                    onChange={e=>setNewStudent({...newStudent, year:e.target.value})}
                                    className="w-[39vw] md:w-[197px] px-4 py-3 text-sm border border-slate-700 rounded-md focus:outline-none focus:ring-1 focus:ring-slate-900"
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="cgpa" className="block text-sm font-medium"> CGPA </label>
                                <input
                                    type="text"
                                    name="cgpa"
                                    placeholder="CGPA"
                                    value={newStudent.cgpa}
                                    onChange={e=>setNewStudent({...newStudent, cgpa:e.target.value})}
                                    className="w-[39vw] md:w-[197px] px-4 py-3 text-sm border border-slate-700 rounded-md focus:outline-none focus:ring-1 focus:ring-slate-900"
                                    required
                                />
                            </div>
                        </div>

                        <hr/>
                        <button type='submit' className="bg-blue-500 hover:bg-blue-600 cursor-pointer text-white py-3 text-center rounded-md">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Modal;