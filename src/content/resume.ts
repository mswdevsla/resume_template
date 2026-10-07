export type Experience = {
  company: string;
  role: string;
  period: string;
  details: string[];
};

export type SkillGroup = {
  name: string;
  items: string[];
};

export type Education = {
  school: string;
  major: string;
  degree: string;
  period: string;
};

export type Certification = {
  name: string;
  issuer: string;
  date: string;
};

export type Resume = {
  name: string;
  phone: string;
  email: string;
  github: string;
  competencies: string[];
  experiences: Experience[];
  skills: SkillGroup[];
  education: Education[];
  certifications: Certification[];
};

/**
 * 이력서 내용. 이 파일만 고치면 화면과 PDF에 함께 반영됩니다.
 * 경력, 스킬, 학력, 자격증은 배열에 항목을 추가하면 아래로 늘어납니다.
 */
export const resume: Resume = {
  name: "이름",
  phone: "010-0000-0000",
  email: "name@email.com",
  github: "https://github.com/username",
  competencies: [
    "요구사항을 화면 흐름과 데이터 구조로 나눠 구현합니다.",
    "React와 Next.js로 사용자 흐름이 분명한 웹 화면을 만듭니다.",
    "타입과 컴포넌트 경계를 맞춰 변경이 번지지 않게 정리합니다.",
    "API 응답과 오류 상태를 화면에 일관되게 반영합니다.",
    "배포 전에 주요 흐름과 비어 있는 상태를 브라우저에서 확인합니다.",
    "일정, 범위, 남은 위험을 짧게 공유하며 구현을 이어 갑니다.",
  ],
  experiences: [
    {
      company: "회사명",
      role: "프론트엔드 개발",
      period: "2022.03 – 현재",
      details: [
        "담당 서비스의 화면과 상태 흐름을 정리하고 주요 사용 경로를 구현했습니다.",
        "반복되던 입력·조회 화면을 공통 구조로 맞춰 이후 기능 추가 범위를 줄였습니다.",
        "배포 전 핵심 시나리오와 오류 상태를 확인해 사용자에게 보이는 빈칸을 막았습니다.",
      ],
    },
    {
      company: "이전 회사명",
      role: "웹 개발",
      period: "2019.01 – 2022.02",
      details: [
        "운영 중인 화면의 수정 요청을 작은 단위로 나눠 반영했습니다.",
        "데이터 조회와 목록 화면의 빈 상태, 오류 상태를 구분해 안내 문구를 맞췄습니다.",
      ],
    },
  ],
  skills: [
    { name: "Language", items: ["TypeScript", "JavaScript"] },
    { name: "Framework", items: ["React", "Next.js"] },
    { name: "Tool", items: ["Git", "GitHub"] },
  ],
  education: [
    {
      school: "OO대학교",
      major: "전공",
      degree: "학사",
      period: "2014.03 – 2018.02",
    },
  ],
  certifications: [
    {
      name: "자격증명",
      issuer: "발급기관",
      date: "2018.05",
    },
  ],
};
