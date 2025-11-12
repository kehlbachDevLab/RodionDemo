'use client';
import { useLanguage } from '@/model/LanguageContext';
import TypewriterManual from '@/view/components/TypewriterManual'
import Blockbase from '@/view/components/Blockbase';

import { useInView } from 'framer-motion';
import { useRef } from 'react';

import { useFormatController } from '@/controller/FormatController';


export default function OffersBlock() {

  const { t } = useLanguage();
  const textIntro = t?.Offers?.intro ?? [];