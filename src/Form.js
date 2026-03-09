import { useState } from "react";

export default function RegisterForm(){
    const [form, setForm] = useState({
        firstName: 'Luke',
        lastName: 'Holmes',
        email: 'lukeholmes@distinct.com'
    });

    return (
        <>
            <label>
                First Name:
                <input 
                    value={form.firstName}
                    onChange={e => {
                        setForm({
                            ...form,
                            firstName: e.target.value
                        });
                    }}
                />
            </label>

            <label>
                Last Name:
                <input 
                    value={form.lastName}
                    onChange={e => {
                        setForm({
                            ...form,
                            lastName: e.target.value
                        });
                    }}
                />
            </label>

            <label>
                Email:
                <input 
                    value={form.email}
                    onChange={e => {
                        setForm({
                            ...form,
                            email: e.target.value
                        });
                    }}
                />
            </label>

            <p>
                {form.firstName}{" "}
                {form.lastName}{" "}
                {form.email}
            </p>
        </>
    );
};