// --- Demo version. Code concealed ---
'use client';



export default function AboutMeBlock() {
  const formatStyles = useFormatController().aboutMe;

  const imagesCertificates = [
    { src: ImagePaths.about.img_02.path, alt: ImagePaths.about.img_02.title },

    { src: ImagePaths.about.img_kotlin.path, alt: ImagePaths.about.img_kotlin.title },



          className='text-center'

          <Blockbase displayText={t?.AboutMe?.bodyA} />
        </div>

        <div id="am_containerARight" className={formatStyles.am_containerARight}>
      </div>      

      <div id="am_conProfSkills" className={formatStyles.am_conProfSkills}>
        <TypewriterManual
          textLines={t.AboutMe.tw_professional_skills}
          textSize={formatStyles.am_twProfSkills.textSize}
          hideCaretOnFinish = {true}
          gridStyles={formatStyles.am_ProfSkillsImgBox.gridStyles}/>
      {isInView && (
        <TypewriterManual
          className='text-center'
        />
      )}

      <div id="am_conOngoingEdu" className={formatStyles.am_conOngoingEdu}>
        />

}// --- End of demo block ---
