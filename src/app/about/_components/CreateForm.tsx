'use client';
import { getUserList } from '@/app/_api/about';
import { IconFont } from '@/lib/IconFont';
import React, { useEffect } from 'react';

const CreateForm = () => {
  useEffect(() => {
    (async () => {
      const res = await getUserList({
        platformType: 'SYSTEM',
      });
      console.log('🚀 ~ file: CreateForm.tsx:13 ~ res:', res);
    })();
  }, []);

  return (
    <div>
      CreateForm
      <IconFont type="icon-contractCar-green" />
    </div>
  );
};

export default CreateForm;
