import React from 'react'
import { useState } from 'react'
import moment from 'moment/moment';
import DatePicker from "react-datepicker";

import { Machine } from '../../utils/data';
import axios from 'axios';
import { ChakraProvider, Input, InputGroup, InputLeftElement, Select, TagLabel, Textarea } from '@chakra-ui/react';
import { PinInput, PinInputField } from '@chakra-ui/react'
import "react-datepicker/dist/react-datepicker.css";

import { useRef } from 'react';
import { PhoneIcon } from '@heroicons/react/24/outline';
const CheckPage: React.FC = () => {
  const [empNo, setEmpNo] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [dateCheck, setDateCheck] = useState<Date>(new Date());
  const [statusLabel, setStatusLabel] = useState<string>("");
  const [prdLine, setprdLine] = useState<string>("")
  const [manualStatus, setManualStatus] = useState<string>("")
  const [pokayoke, setPokayoke] = useState<string>("")
  const [stock, setStock] = useState<string>("")
  const [assemble, setAssemble] = useState<string>("")
  const [remarkStatusLabel, setRemarkStatusLabel] = useState<string>("")
  const [remarkManualStatus, setRemarkManualStatus] = useState<string>("")

  const saveData = async () => {
    await axios.post(``).then((res) => {

    }).catch((err) => {
      console.log(err);

    })

  }
  return (
    <div>
      <div className='px-[4rem]'>
        <div className='grid grid-cols-12'>
          <div className='grid col-span-4'>
            <ChakraProvider>
              <div className='mb-4'>
                <label htmlFor="labels" className='font-bold'>1. รหัสพนักงานที่ลงปฏิบัติงาน :</label>
                <Input value={empNo} onChange={(e) => {
                  setEmpNo(e.target.value)
                }}
                  placeholder='รหัสพนักงานที่ลงปฏิบัติงาน' />
              </div>
              <div className='mb-4'>
                <label htmlFor="labels" className='font-bold'>2. ระบุวันที่  Calenda :</label>
                <DatePicker onChange={(e) => {
                  console.log(e);

                }}

                  customInput={<InputGroup className='ml-[1rem]'>
                    <InputLeftElement pointerEvents='none'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                      </svg>

                    </InputLeftElement>
                    <Input type='tel' placeholder='Phone number' />
                  </InputGroup>} />
              </div>
              <div className='mb-4'>
                <label htmlFor="labels" className='font-bold'>3. หัวข้อการตรวจ check change :</label>

              </div>
              <div className='mb-4 ml-[1rem]'>
                <label htmlFor="Check" className='font-bold'>3.1 Check ป้าย :</label>
                <Select value={statusLabel} onChange={(e) => {
                  if (e.target.value == "OK") {
                    setRemarkStatusLabel("")
                  }
                  setStatusLabel(e.target.value)
                }}>
                  <option value="OK">OK</option>
                  <option value="NG">NG</option>
                </Select>
                {statusLabel == "NG" ? (
                  <div className='mt-1'>
                    <Textarea value={remarkStatusLabel} placeholder='ระบุหมายเหตุ Check ป้าย NG..' onChange={(e) => {
                      setRemarkStatusLabel(e.target.value)

                    }} />

                  </div>
                ) : <></>}


              </div>
              <div className='mb-4 ml-[1rem]'>
                <label htmlFor="Check" className='font-bold'>3.2 Manual :</label>
                <Select value={manualStatus} onChange={(e) => {
                  if (e.target.value == "OK") {
                    setRemarkManualStatus("")
                  }
                  setManualStatus(e.target.value)
                }
                }>
                  <option value="OK">OK</option>
                  <option value="NG">NG</option>
                </Select>
                {manualStatus == "NG" ? (
                  <div className='mt-1'>
                    <Textarea value={remarkManualStatus} placeholder='ระบุหมายเหตุ Check ป้าย NG..' onChange={(e) => {
                      setRemarkManualStatus(e.target.value)

                    }} />

                  </div>
                ) : <></>}


              </div>
            </ChakraProvider>
          </div>
          <div className='grid col-span-8'>
            <div className='flex justify-center items-center'>
              Table
            </div>
          </div>

        </div>

      </div>

    </div>
  )
}

export default CheckPage