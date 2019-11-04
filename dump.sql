--
-- PostgreSQL database dump
--

-- Dumped from database version 11.5
-- Dumped by pg_dump version 11.5

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: uuid-ossp; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA public;


--
-- Name: EXTENSION "uuid-ossp"; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION "uuid-ossp" IS 'generate universally unique identifiers (UUIDs)';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: branch; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.branch (
    id uuid DEFAULT public.uuid_generate_v1() NOT NULL,
    description jsonb NOT NULL,
    acronym jsonb,
    address jsonb
);


ALTER TABLE public.branch OWNER TO postgres;

--
-- Name: career_journey; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.career_journey (
    id uuid DEFAULT public.uuid_generate_v1() NOT NULL,
    user_id uuid NOT NULL,
    organization character varying NOT NULL,
    job_title character varying,
    description character varying,
    start_date character varying,
    end_date character varying
);


ALTER TABLE public.career_journey OWNER TO postgres;

--
-- Name: career_mobility; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.career_mobility (
    id uuid DEFAULT public.uuid_generate_v1() NOT NULL,
    description_en character varying NOT NULL,
    description_fr character varying
);


ALTER TABLE public.career_mobility OWNER TO postgres;

--
-- Name: competency; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.competency (
    id uuid DEFAULT public.uuid_generate_v1() NOT NULL,
    name character varying NOT NULL
);


ALTER TABLE public.competency OWNER TO postgres;

--
-- Name: db; Type: TABLE; Schema: public; Owner: rizvirab
--

CREATE TABLE public.db (
    id integer NOT NULL,
    text character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.db OWNER TO rizvirab;

--
-- Name: db_id_seq; Type: SEQUENCE; Schema: public; Owner: rizvirab
--

CREATE SEQUENCE public.db_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.db_id_seq OWNER TO rizvirab;

--
-- Name: db_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: rizvirab
--

ALTER SEQUENCE public.db_id_seq OWNED BY public.db.id;


--
-- Name: department; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.department (
    id uuid DEFAULT public.uuid_generate_v1() NOT NULL,
    description character varying NOT NULL,
    acronym character varying,
    address jsonb
);


ALTER TABLE public.department OWNER TO postgres;

--
-- Name: directorate; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.directorate (
    id uuid DEFAULT public.uuid_generate_v1() NOT NULL,
    description jsonb NOT NULL,
    acronym jsonb,
    address jsonb
);


ALTER TABLE public.directorate OWNER TO postgres;

--
-- Name: division; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.division (
    id uuid DEFAULT public.uuid_generate_v1() NOT NULL,
    description jsonb NOT NULL,
    acronym jsonb,
    address jsonb
);


ALTER TABLE public.division OWNER TO postgres;

--
-- Name: education; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.education (
    id uuid DEFAULT public.uuid_generate_v1() NOT NULL,
    user_id uuid NOT NULL,
    school_id uuid NOT NULL,
    program character varying,
    start_date character varying,
    end_date character varying
);


ALTER TABLE public.education OWNER TO postgres;

--
-- Name: employment_status; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.employment_status (
    id uuid DEFAULT public.uuid_generate_v1() NOT NULL,
    description_en character varying NOT NULL,
    description_fr character varying
);


ALTER TABLE public.employment_status OWNER TO postgres;

--
-- Name: group_level; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.group_level (
    id uuid DEFAULT public.uuid_generate_v1() NOT NULL,
    description character varying NOT NULL,
    createdat date,
    updatedat date
);


ALTER TABLE public.group_level OWNER TO postgres;

--
-- Name: key_competency; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.key_competency (
    id uuid DEFAULT public.uuid_generate_v1() NOT NULL,
    description_en character varying NOT NULL,
    description_fr character varying
);


ALTER TABLE public.key_competency OWNER TO postgres;

--
-- Name: organization; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.organization (
    id uuid NOT NULL,
    department_id uuid,
    sector_id uuid,
    branch_id uuid,
    division_id uuid,
    directorate_id uuid
);


ALTER TABLE public.organization OWNER TO postgres;

--
-- Name: school; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.school (
    id uuid DEFAULT public.uuid_generate_v1() NOT NULL,
    country character(3) NOT NULL,
    state character(2),
    description text NOT NULL,
    "createdAt" date,
    "updatedAt" date
);


ALTER TABLE public.school OWNER TO postgres;

--
-- Name: second_language_proficiency; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.second_language_proficiency (
    id uuid DEFAULT public.uuid_generate_v1() NOT NULL,
    reading_proficiency character(1) NOT NULL,
    writing_proficiency character(1) NOT NULL,
    oral_proficiency character(1) NOT NULL,
    reading_date date NOT NULL,
    writing_date date NOT NULL,
    oral_date date NOT NULL
);


ALTER TABLE public.second_language_proficiency OWNER TO postgres;

--
-- Name: sector; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.sector (
    id uuid DEFAULT public.uuid_generate_v1() NOT NULL,
    description jsonb NOT NULL,
    acronym jsonb,
    address jsonb
);


ALTER TABLE public.sector OWNER TO postgres;

--
-- Name: security_clearance; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.security_clearance (
    id uuid DEFAULT public.uuid_generate_v1() NOT NULL,
    description_en character varying NOT NULL,
    description_fr character varying
);


ALTER TABLE public.security_clearance OWNER TO postgres;

--
-- Name: skill; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.skill (
    id uuid DEFAULT public.uuid_generate_v1() NOT NULL,
    name character varying NOT NULL,
    "createdAt" date,
    "updatedAt" date
);


ALTER TABLE public.skill OWNER TO postgres;

--
-- Name: talent_matrix_result; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.talent_matrix_result (
    id uuid DEFAULT public.uuid_generate_v1() NOT NULL,
    description_en character varying NOT NULL,
    description_fr character varying
);


ALTER TABLE public.talent_matrix_result OWNER TO postgres;

--
-- Name: user; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."user" (
    id uuid DEFAULT public.uuid_generate_v1() NOT NULL,
    first_name character varying NOT NULL,
    last_name character varying NOT NULL,
    email character varying NOT NULL,
    job_title character varying NOT NULL,
    phone character varying,
    mobile character varying,
    location character varying,
    manager character varying,
    team character varying,
    first_language character varying NOT NULL,
    second_language character varying,
    second_language_proficiency_id uuid,
    employment_status_id uuid NOT NULL,
    group_level_id uuid NOT NULL,
    year_service smallint NOT NULL,
    security_clearance_id uuid NOT NULL,
    department_id uuid NOT NULL,
    sector_id uuid,
    branch_id uuid,
    directorate_id uuid,
    linkedin character varying,
    github character varying,
    career_mobility_id uuid,
    talent_matrix_result_id uuid,
    key_competency_id uuid,
    division_id uuid
);


ALTER TABLE public."user" OWNER TO postgres;

--
-- Name: user_competency; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.user_competency (
    id uuid DEFAULT public.uuid_generate_v1() NOT NULL,
    user_id uuid NOT NULL,
    competency_id uuid NOT NULL
);


ALTER TABLE public.user_competency OWNER TO postgres;

--
-- Name: user_developmental_goal; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.user_developmental_goal (
    id uuid DEFAULT public.uuid_generate_v1() NOT NULL,
    user_id uuid NOT NULL,
    competency_id uuid NOT NULL
);


ALTER TABLE public.user_developmental_goal OWNER TO postgres;

--
-- Name: user_organization; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.user_organization (
    id uuid NOT NULL,
    user_id uuid,
    organization_id uuid,
    start_date date,
    end_date date,
    current boolean
);


ALTER TABLE public.user_organization OWNER TO postgres;

--
-- Name: user_project; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.user_project (
    id uuid DEFAULT public.uuid_generate_v1() NOT NULL,
    user_id uuid NOT NULL,
    project character varying NOT NULL
);


ALTER TABLE public.user_project OWNER TO postgres;

--
-- Name: user_skill; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.user_skill (
    id uuid DEFAULT public.uuid_generate_v1() NOT NULL,
    user_id uuid NOT NULL,
    skill_id uuid NOT NULL
);


ALTER TABLE public.user_skill OWNER TO postgres;

--
-- Name: db id; Type: DEFAULT; Schema: public; Owner: rizvirab
--

ALTER TABLE ONLY public.db ALTER COLUMN id SET DEFAULT nextval('public.db_id_seq'::regclass);


--
-- Data for Name: branch; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.branch (id, description, acronym, address) FROM stdin;
\.


--
-- Data for Name: career_journey; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.career_journey (id, user_id, organization, job_title, description, start_date, end_date) FROM stdin;
\.


--
-- Data for Name: career_mobility; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.career_mobility (id, description_en, description_fr) FROM stdin;
a8b15bd4-f760-11e9-abfa-3af9d3903da4	Fit	\N
a8b1847e-f760-11e9-abfa-3af9d3903da4	Move to more suitable role	\N
a8b184ce-f760-11e9-abfa-3af9d3903da4	Develop in role	\N
a8b184ec-f760-11e9-abfa-3af9d3903da4	Well-placed in role	\N
a8b18500-f760-11e9-abfa-3af9d3903da4	Ready for lateral movement	\N
a8b18514-f760-11e9-abfa-3af9d3903da4	Ready for advancement	\N
\.


--
-- Data for Name: competency; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.competency (id, name) FROM stdin;
\.


--
-- Data for Name: db; Type: TABLE DATA; Schema: public; Owner: rizvirab
--

COPY public.db (id, text, "createdAt", "updatedAt") FROM stdin;
\.


--
-- Data for Name: department; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.department (id, description, acronym, address) FROM stdin;
c04da846-f766-11e9-abfa-3af9d3903da4	Innovation, Science and Economic Development Canada	ISED	\N
\.


--
-- Data for Name: directorate; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.directorate (id, description, acronym, address) FROM stdin;
\.


--
-- Data for Name: division; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.division (id, description, acronym, address) FROM stdin;
\.


--
-- Data for Name: education; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.education (id, user_id, school_id, program, start_date, end_date) FROM stdin;
\.


--
-- Data for Name: employment_status; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.employment_status (id, description_en, description_fr) FROM stdin;
647f8d52-f75e-11e9-abfa-3af9d3903da4	Acting	\N
647f8e2e-f75e-11e9-abfa-3af9d3903da4	Assignment	\N
647f8e56-f75e-11e9-abfa-3af9d3903da4	Deployment	\N
647f8e6a-f75e-11e9-abfa-3af9d3903da4	Indeterminate	\N
647f8e88-f75e-11e9-abfa-3af9d3903da4	Secondment	\N
647f9072-f75e-11e9-abfa-3af9d3903da4	Student	\N
647f9090-f75e-11e9-abfa-3af9d3903da4	Casual	\N
647f90a4-f75e-11e9-abfa-3af9d3903da4	Term	\N
\.


--
-- Data for Name: group_level; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.group_level (id, description, createdat, updatedat) FROM stdin;
198ed1de-f760-11e9-abfa-3af9d3903da4	AS   01	\N	\N
198f2eea-f760-11e9-abfa-3af9d3903da4	AS   02	\N	\N
198f2f3a-f760-11e9-abfa-3af9d3903da4	AS   03	\N	\N
198f2f58-f760-11e9-abfa-3af9d3903da4	AS   04	\N	\N
198f2f6c-f760-11e9-abfa-3af9d3903da4	AS   05	\N	\N
198f2f80-f760-11e9-abfa-3af9d3903da4	AS   06	\N	\N
198f2fbc-f760-11e9-abfa-3af9d3903da4	AS   07	\N	\N
198f2fd0-f760-11e9-abfa-3af9d3903da4	AS   07	\N	\N
198f2fe4-f760-11e9-abfa-3af9d3903da4	AU   04	\N	\N
198f2ff8-f760-11e9-abfa-3af9d3903da4	CA   01	\N	\N
198f300c-f760-11e9-abfa-3af9d3903da4	CA   02	\N	\N
198f3020-f760-11e9-abfa-3af9d3903da4	CA   02	\N	\N
198f3034-f760-11e9-abfa-3af9d3903da4	CM   04	\N	\N
198f3048-f760-11e9-abfa-3af9d3903da4	CM   05	\N	\N
198f305c-f760-11e9-abfa-3af9d3903da4	CO   02	\N	\N
198f3070-f760-11e9-abfa-3af9d3903da4	CO   03	\N	\N
198f307a-f760-11e9-abfa-3af9d3903da4	CO   03	\N	\N
198f308e-f760-11e9-abfa-3af9d3903da4	CO   04	\N	\N
198f30a2-f760-11e9-abfa-3af9d3903da4	CR   02	\N	\N
198f30b6-f760-11e9-abfa-3af9d3903da4	CR   03	\N	\N
198f30ca-f760-11e9-abfa-3af9d3903da4	CR   04	\N	\N
198f30de-f760-11e9-abfa-3af9d3903da4	CR   05	\N	\N
198f30f2-f760-11e9-abfa-3af9d3903da4	CS   02	\N	\N
198f3106-f760-11e9-abfa-3af9d3903da4	CS   03	\N	\N
198f311a-f760-11e9-abfa-3af9d3903da4	CS   04	\N	\N
198f312e-f760-11e9-abfa-3af9d3903da4	CS   04	\N	\N
198f3142-f760-11e9-abfa-3af9d3903da4	CS   05	\N	\N
198f3156-f760-11e9-abfa-3af9d3903da4	EC   01	\N	\N
198f316a-f760-11e9-abfa-3af9d3903da4	EC   02	\N	\N
198f317e-f760-11e9-abfa-3af9d3903da4	EC   03	\N	\N
198f3192-f760-11e9-abfa-3af9d3903da4	EC   04	\N	\N
198f319c-f760-11e9-abfa-3af9d3903da4	EC   05	\N	\N
198f31b0-f760-11e9-abfa-3af9d3903da4	EC   06	\N	\N
198f31e2-f760-11e9-abfa-3af9d3903da4	EC   08	\N	\N
198f31f6-f760-11e9-abfa-3af9d3903da4	EC  07	\N	\N
198f320a-f760-11e9-abfa-3af9d3903da4	EC  07	\N	\N
198f321e-f760-11e9-abfa-3af9d3903da4	EDEDS02	\N	\N
198f3232-f760-11e9-abfa-3af9d3903da4	EG   02	\N	\N
198f3246-f760-11e9-abfa-3af9d3903da4	EG   03	\N	\N
198f325a-f760-11e9-abfa-3af9d3903da4	EG   04	\N	\N
198f326e-f760-11e9-abfa-3af9d3903da4	EG   05	\N	\N
198f3282-f760-11e9-abfa-3af9d3903da4	EG   06	\N	\N
198f3296-f760-11e9-abfa-3af9d3903da4	EG   07	\N	\N
198f32a0-f760-11e9-abfa-3af9d3903da4	EL   01	\N	\N
198f32b4-f760-11e9-abfa-3af9d3903da4	EL   02	\N	\N
198f32c8-f760-11e9-abfa-3af9d3903da4	EL   03	\N	\N
198f32dc-f760-11e9-abfa-3af9d3903da4	EL   04	\N	\N
198f32f0-f760-11e9-abfa-3af9d3903da4	EL   05	\N	\N
198f3304-f760-11e9-abfa-3af9d3903da4	EL   06	\N	\N
198f3318-f760-11e9-abfa-3af9d3903da4	EL   07	\N	\N
198f332c-f760-11e9-abfa-3af9d3903da4	EL   08	\N	\N
198f3340-f760-11e9-abfa-3af9d3903da4	ENENG02	\N	\N
198f3354-f760-11e9-abfa-3af9d3903da4	ENENG03	\N	\N
198f3368-f760-11e9-abfa-3af9d3903da4	ENENG04	\N	\N
198f337c-f760-11e9-abfa-3af9d3903da4	ENENG05	\N	\N
198f3390-f760-11e9-abfa-3af9d3903da4	ENENG05	\N	\N
198f33a4-f760-11e9-abfa-3af9d3903da4	ENENG06	\N	\N
198f33b8-f760-11e9-abfa-3af9d3903da4	EX   01	\N	\N
198f33cc-f760-11e9-abfa-3af9d3903da4	EX   02	\N	\N
198f33f4-f760-11e9-abfa-3af9d3903da4	EX   03	\N	\N
198f3408-f760-11e9-abfa-3af9d3903da4	EX   04	\N	\N
198f341c-f760-11e9-abfa-3af9d3903da4	EX   05	\N	\N
198f3430-f760-11e9-abfa-3af9d3903da4	FI   01	\N	\N
198f3444-f760-11e9-abfa-3af9d3903da4	FI   02	\N	\N
198f3458-f760-11e9-abfa-3af9d3903da4	FI   03	\N	\N
198f346c-f760-11e9-abfa-3af9d3903da4	FI   04	\N	\N
198f3480-f760-11e9-abfa-3af9d3903da4	FI   04	\N	\N
198f3494-f760-11e9-abfa-3af9d3903da4	GLCOI12	\N	\N
198f34a8-f760-11e9-abfa-3af9d3903da4	GLEIM10	\N	\N
198f34bc-f760-11e9-abfa-3af9d3903da4	GLEIM12	\N	\N
198f34d0-f760-11e9-abfa-3af9d3903da4	GLMAM10	\N	\N
198f34e4-f760-11e9-abfa-3af9d3903da4	GLMAN06	\N	\N
198f34f8-f760-11e9-abfa-3af9d3903da4	GLMAN09	\N	\N
198f350c-f760-11e9-abfa-3af9d3903da4	GLMDO06	\N	\N
198f3520-f760-11e9-abfa-3af9d3903da4	GLPCF06	\N	\N
198f3534-f760-11e9-abfa-3af9d3903da4	GLPIP09	\N	\N
198f35a2-f760-11e9-abfa-3af9d3903da4	GLPIP10	\N	\N
198f3624-f760-11e9-abfa-3af9d3903da4	GLPIP12	\N	\N
198f3642-f760-11e9-abfa-3af9d3903da4	GLPRW06	\N	\N
198f3660-f760-11e9-abfa-3af9d3903da4	GLWOW09	\N	\N
198f3674-f760-11e9-abfa-3af9d3903da4	GLWOW10	\N	\N
198f367e-f760-11e9-abfa-3af9d3903da4	GSMPS04	\N	\N
198f3692-f760-11e9-abfa-3af9d3903da4	GSMPS06	\N	\N
198f36a6-f760-11e9-abfa-3af9d3903da4	GSPRC05	\N	\N
198f36ba-f760-11e9-abfa-3af9d3903da4	GSSTS03	\N	\N
198f36ce-f760-11e9-abfa-3af9d3903da4	GSSTS04	\N	\N
198f3714-f760-11e9-abfa-3af9d3903da4	GSSTS05	\N	\N
198f3728-f760-11e9-abfa-3af9d3903da4	GSSTS06	\N	\N
198f373c-f760-11e9-abfa-3af9d3903da4	GSSTS07	\N	\N
198f3750-f760-11e9-abfa-3af9d3903da4	GT   01	\N	\N
198f3764-f760-11e9-abfa-3af9d3903da4	GT   02	\N	\N
198f3778-f760-11e9-abfa-3af9d3903da4	GT   03	\N	\N
198f3782-f760-11e9-abfa-3af9d3903da4	GT   04	\N	\N
198f3796-f760-11e9-abfa-3af9d3903da4	GT   05	\N	\N
198f37aa-f760-11e9-abfa-3af9d3903da4	GX   00	\N	\N
198f37be-f760-11e9-abfa-3af9d3903da4	HP   05	\N	\N
198f37d2-f760-11e9-abfa-3af9d3903da4	HP   08	\N	\N
198f37e6-f760-11e9-abfa-3af9d3903da4	IS   01	\N	\N
198f37fa-f760-11e9-abfa-3af9d3903da4	IS   02	\N	\N
198f380e-f760-11e9-abfa-3af9d3903da4	IS   03	\N	\N
198f3818-f760-11e9-abfa-3af9d3903da4	IS   04	\N	\N
198f382c-f760-11e9-abfa-3af9d3903da4	IS   05	\N	\N
198f3840-f760-11e9-abfa-3af9d3903da4	IS   06	\N	\N
198f3854-f760-11e9-abfa-3af9d3903da4	IS   06	\N	\N
198f3868-f760-11e9-abfa-3af9d3903da4	LS   01	\N	\N
198f387c-f760-11e9-abfa-3af9d3903da4	LS   02	\N	\N
198f3890-f760-11e9-abfa-3af9d3903da4	LS   03	\N	\N
198f389a-f760-11e9-abfa-3af9d3903da4	LS   04	\N	\N
198f38ae-f760-11e9-abfa-3af9d3903da4	MM   01	\N	\N
198f38c2-f760-11e9-abfa-3af9d3903da4	MM   02	\N	\N
198f38d6-f760-11e9-abfa-3af9d3903da4	MM   03	\N	\N
198f38ea-f760-11e9-abfa-3af9d3903da4	OM   02	\N	\N
198f38fe-f760-11e9-abfa-3af9d3903da4	OM   04	\N	\N
198f3930-f760-11e9-abfa-3af9d3903da4	PC   02	\N	\N
198f3944-f760-11e9-abfa-3af9d3903da4	PC   05	\N	\N
198f3958-f760-11e9-abfa-3af9d3903da4	PE   01	\N	\N
198f396c-f760-11e9-abfa-3af9d3903da4	PE   02	\N	\N
198f3976-f760-11e9-abfa-3af9d3903da4	PE   03	\N	\N
198f398a-f760-11e9-abfa-3af9d3903da4	PE   04	\N	\N
198f399e-f760-11e9-abfa-3af9d3903da4	PE   05	\N	\N
198f39b2-f760-11e9-abfa-3af9d3903da4	PE   06	\N	\N
198f39c6-f760-11e9-abfa-3af9d3903da4	PE   06	\N	\N
198f39da-f760-11e9-abfa-3af9d3903da4	PG   01	\N	\N
198f39ee-f760-11e9-abfa-3af9d3903da4	PG   02	\N	\N
198f39f8-f760-11e9-abfa-3af9d3903da4	PG   03	\N	\N
198f3a0c-f760-11e9-abfa-3af9d3903da4	PG   04	\N	\N
198f3a20-f760-11e9-abfa-3af9d3903da4	PG   05	\N	\N
198f3a34-f760-11e9-abfa-3af9d3903da4	PG   06	\N	\N
198f3a48-f760-11e9-abfa-3af9d3903da4	PG   06	\N	\N
198f3a5c-f760-11e9-abfa-3af9d3903da4	PM   01	\N	\N
198f3a70-f760-11e9-abfa-3af9d3903da4	PM   02	\N	\N
198f3a84-f760-11e9-abfa-3af9d3903da4	PM   03	\N	\N
198f3a98-f760-11e9-abfa-3af9d3903da4	PM   04	\N	\N
198f3aa2-f760-11e9-abfa-3af9d3903da4	PM   05	\N	\N
198f3ab6-f760-11e9-abfa-3af9d3903da4	PM   06	\N	\N
198f3aca-f760-11e9-abfa-3af9d3903da4	PM   06	\N	\N
198f3ade-f760-11e9-abfa-3af9d3903da4	PROFO02	\N	\N
198f3af2-f760-11e9-abfa-3af9d3903da4	PY   05	\N	\N
198f3b06-f760-11e9-abfa-3af9d3903da4	SEREM01	\N	\N
198f3b1a-f760-11e9-abfa-3af9d3903da4	SEREM02	\N	\N
198f3b42-f760-11e9-abfa-3af9d3903da4	SERES01	\N	\N
198f3b60-f760-11e9-abfa-3af9d3903da4	SERES02	\N	\N
198f3b7e-f760-11e9-abfa-3af9d3903da4	SERES03	\N	\N
198f3b92-f760-11e9-abfa-3af9d3903da4	SERES04	\N	\N
198f3ba6-f760-11e9-abfa-3af9d3903da4	SERES04	\N	\N
198f3bc4-f760-11e9-abfa-3af9d3903da4	SERES05	\N	\N
198f3bd8-f760-11e9-abfa-3af9d3903da4	SGPAT02	\N	\N
198f3bec-f760-11e9-abfa-3af9d3903da4	SGPAT03	\N	\N
198f3c0a-f760-11e9-abfa-3af9d3903da4	SGPAT04	\N	\N
198f3c1e-f760-11e9-abfa-3af9d3903da4	SGPAT05	\N	\N
198f3c32-f760-11e9-abfa-3af9d3903da4	SGPAT06	\N	\N
198f3c46-f760-11e9-abfa-3af9d3903da4	SGPAT07	\N	\N
198f3c64-f760-11e9-abfa-3af9d3903da4	SGPAT07	\N	\N
198f3c78-f760-11e9-abfa-3af9d3903da4	SGPAT08	\N	\N
198f3c8c-f760-11e9-abfa-3af9d3903da4	STOCE03	\N	\N
198f3caa-f760-11e9-abfa-3af9d3903da4	STSCY02	\N	\N
198f3cbe-f760-11e9-abfa-3af9d3903da4	STSCY03	\N	\N
198f3cd2-f760-11e9-abfa-3af9d3903da4	STSCY04	\N	\N
198f47ea-f760-11e9-abfa-3af9d3903da4	TI   03	\N	\N
198f4808-f760-11e9-abfa-3af9d3903da4	TI   04	\N	\N
198f481c-f760-11e9-abfa-3af9d3903da4	TI   05	\N	\N
198f4830-f760-11e9-abfa-3af9d3903da4	TI   06	\N	\N
198f4844-f760-11e9-abfa-3af9d3903da4	TI   07	\N	\N
198f4858-f760-11e9-abfa-3af9d3903da4	TI   08	\N	\N
198f486c-f760-11e9-abfa-3af9d3903da4	TI   08	\N	\N
\.


--
-- Data for Name: key_competency; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.key_competency (id, description_en, description_fr) FROM stdin;
25acf4b8-f761-11e9-abfa-3af9d3903da4	Achieve results	\N
25acfddc-f761-11e9-abfa-3af9d3903da4	Collaborate with partners and stakeholders	\N
25acfe18-f761-11e9-abfa-3af9d3903da4	Create vision and strategy	\N
25acfe36-f761-11e9-abfa-3af9d3903da4	Uphold integrity and respect	\N
25acfe4a-f761-11e9-abfa-3af9d3903da4	Mobilize people	\N
25acfe5e-f761-11e9-abfa-3af9d3903da4	Promote innovation and guide change	\N
\.


--
-- Data for Name: organization; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.organization (id, department_id, sector_id, branch_id, division_id, directorate_id) FROM stdin;
\.


--
-- Data for Name: school; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.school (id, country, state, description, "createdAt", "updatedAt") FROM stdin;
5aca650a-f4ef-11e9-9247-acde48001122	CAN	\N	High School - All	\N	\N
f6f65bd0-f4f6-11e9-b947-acde48001122	CAN	NS	Acadia University	\N	\N
f6f66102-f4f6-11e9-b947-acde48001122	CAN	NS	Cape Breton, Univ. College of	\N	\N
f6f66134-f4f6-11e9-b947-acde48001122	CAN	NS	Sainte-Anne, Université	\N	\N
f6f66148-f4f6-11e9-b947-acde48001122	CAN	NS	Dalhousie University	\N	\N
f6f66166-f4f6-11e9-b947-acde48001122	CAN	NL	Memorial Univ of Newfoundland	\N	\N
f6f661ac-f4f6-11e9-b947-acde48001122	CAN	NB	Moncton, Université de	\N	\N
f6f661ca-f4f6-11e9-b947-acde48001122	CAN	NB	Mount Allison, University	\N	\N
f6f661de-f4f6-11e9-b947-acde48001122	CAN	NS	Mount Saint Vincent University	\N	\N
f6f661fc-f4f6-11e9-b947-acde48001122	CAN	NS	Nova Scotia College Art/Design	\N	\N
f6f66210-f4f6-11e9-b947-acde48001122	CAN	NS	Saint Francis Xavier U.	\N	\N
f6f66224-f4f6-11e9-b947-acde48001122	CAN	NB	Saint-Louis Maillet (M. U. C.)	\N	\N
f6f66238-f4f6-11e9-b947-acde48001122	CAN	NB	Shippagan (Moncton U. Campus)	\N	\N
f6f6624c-f4f6-11e9-b947-acde48001122	CAN	NS	Saint Mary's University	\N	\N
f6f6626a-f4f6-11e9-b947-acde48001122	CAN	NS	Nova Scotia, Technical Univ	\N	\N
f6f6627e-f4f6-11e9-b947-acde48001122	CAN	NB	New Brunswick, University of	\N	\N
f6f66292-f4f6-11e9-b947-acde48001122	CAN	NB	Saint John Campus, U.N.B.	\N	\N
f6f662b0-f4f6-11e9-b947-acde48001122	CAN	PE	Prince Edward Island, Univ	\N	\N
f6f662c4-f4f6-11e9-b947-acde48001122	CAN	NB	Saint Thomas University	\N	\N
f6f662ec-f4f6-11e9-b947-acde48001122	CAN	NS	Atlantic School of Theology	\N	\N
f6f66300-f4f6-11e9-b947-acde48001122	CAN	QC	Bishop's University	\N	\N
f6f6631e-f4f6-11e9-b947-acde48001122	CAN	QC	Sir George Williams University	\N	\N
f6f66332-f4f6-11e9-b947-acde48001122	CAN	QC	Concordia University	\N	\N
f6f66346-f4f6-11e9-b947-acde48001122	CAN	NS	King's College, University of	\N	\N
f6f6635a-f4f6-11e9-b947-acde48001122	CAN	QC	École de Hautes études comm	\N	\N
f6f66378-f4f6-11e9-b947-acde48001122	CAN	QC	Éc.nat.admin. publ.-Chicoutimi	\N	\N
f6f6638c-f4f6-11e9-b947-acde48001122	CAN	QC	Éc.nat. admin. publ. - Hull	\N	\N
f6f663a0-f4f6-11e9-b947-acde48001122	CAN	QC	Éc.nat. admin. publ.- Montréal	\N	\N
f6f663b4-f4f6-11e9-b947-acde48001122	CAN	QC	Éc.nat. admin. publ. - Québec	\N	\N
f6f663e6-f4f6-11e9-b947-acde48001122	CAN	QC	École Polytechnique - Montréal	\N	\N
f6f663fa-f4f6-11e9-b947-acde48001122	CAN	QC	École - technologie supérieure	\N	\N
f6f66418-f4f6-11e9-b947-acde48001122	CAN	QC	Laval, Université	\N	\N
f6f6642c-f4f6-11e9-b947-acde48001122	CAN	QC	MacDonald Campus (McGill U.)	\N	\N
f6f66440-f4f6-11e9-b947-acde48001122	CAN	QC	McGill, University of	\N	\N
f6f66454-f4f6-11e9-b947-acde48001122	CAN	QC	Montréal, Université de	\N	\N
f6f66472-f4f6-11e9-b947-acde48001122	CAN	QC	Sherbrooke, Université de	\N	\N
f6f66486-f4f6-11e9-b947-acde48001122	CAN	QC	Québec Univ, Chicoutimi	\N	\N
f6f6649a-f4f6-11e9-b947-acde48001122	CAN	QC	Québec, Univ. - Outaouais	\N	\N
f6f664ae-f4f6-11e9-b947-acde48001122	CAN	QC	Québec Univ., Montréal	\N	\N
f6f664cc-f4f6-11e9-b947-acde48001122	CAN	QC	Québec Univ., Rimouski	\N	\N
f6f664e0-f4f6-11e9-b947-acde48001122	CAN	QC	Québec Univ, Rouyn	\N	\N
f6f664f4-f4f6-11e9-b947-acde48001122	CAN	QC	Québec Univ, Trois-Rivières	\N	\N
f6f66508-f4f6-11e9-b947-acde48001122	CAN	PE	Atlantic Veterinary College	\N	\N
f6f66526-f4f6-11e9-b947-acde48001122	CAN	ON	Saint-Paul University	\N	\N
f6f6653a-f4f6-11e9-b947-acde48001122	CAN	ON	Algoma University College	\N	\N
f6f6654e-f4f6-11e9-b947-acde48001122	CAN	ON	Brock University	\N	\N
f6f6656c-f4f6-11e9-b947-acde48001122	CAN	ON	Carleton University	\N	\N
f6f66580-f4f6-11e9-b947-acde48001122	CAN	ON	Guelph, University of	\N	\N
f6f66594-f4f6-11e9-b947-acde48001122	CAN	ON	Hearst - Collège universitaire	\N	\N
f6f665a8-f4f6-11e9-b947-acde48001122	CAN	ON	Lakehead University	\N	\N
f6f665c6-f4f6-11e9-b947-acde48001122	CAN	ON	Laurentian University	\N	\N
f6f665da-f4f6-11e9-b947-acde48001122	CAN	ON	McMaster University	\N	\N
f6f6660c-f4f6-11e9-b947-acde48001122	CAN	ON	Nipissing University	\N	\N
f6f6662a-f4f6-11e9-b947-acde48001122	CAN	ON	Ottawa, University of	\N	\N
f6f66648-f4f6-11e9-b947-acde48001122	CAN	ON	Queen's University	\N	\N
f6f6665c-f4f6-11e9-b947-acde48001122	CAN	ON	Royal Military College Canada	\N	\N
f6f6667a-f4f6-11e9-b947-acde48001122	CAN	ON	Ryerson University	\N	\N
f6f66698-f4f6-11e9-b947-acde48001122	CAN	ON	Toronto, University of	\N	\N
f6f666ac-f4f6-11e9-b947-acde48001122	CAN	ON	Trent University	\N	\N
f6f666de-f4f6-11e9-b947-acde48001122	CAN	ON	Waterloo, University of	\N	\N
f6f666f2-f4f6-11e9-b947-acde48001122	CAN	ON	Western Ontario, University of	\N	\N
f6f66706-f4f6-11e9-b947-acde48001122	CAN	ON	Wilfrid Laurier University	\N	\N
f6f66724-f4f6-11e9-b947-acde48001122	CAN	ON	Windsor, University of	\N	\N
f6f66738-f4f6-11e9-b947-acde48001122	CAN	ON	York University	\N	\N
f6f6674c-f4f6-11e9-b947-acde48001122	CAN	ON	Sudbury, University of	\N	\N
f6f6676a-f4f6-11e9-b947-acde48001122	CAN	MB	Brandon University	\N	\N
f6f6677e-f4f6-11e9-b947-acde48001122	CAN	MB	Saint-Boniface, Col. univ.	\N	\N
f6f66792-f4f6-11e9-b947-acde48001122	CAN	MB	Manitoba, University of	\N	\N
f6f667b0-f4f6-11e9-b947-acde48001122	CAN	MB	Winnipeg, University of	\N	\N
f6f667c4-f4f6-11e9-b947-acde48001122	CAN	NB	Atlantic Baptist Col. Moncton	\N	\N
f6f667d8-f4f6-11e9-b947-acde48001122	CAN	SK	Regina, University of	\N	\N
f6f667ec-f4f6-11e9-b947-acde48001122	CAN	SK	Saskatchewan, University of	\N	\N
f6f6680a-f4f6-11e9-b947-acde48001122	CAN	SK	Sask. Indian Federated Col.	\N	\N
f6f6681e-f4f6-11e9-b947-acde48001122	CAN	AB	Alberta, University of	\N	\N
f6f66832-f4f6-11e9-b947-acde48001122	CAN	AB	Athabasca University	\N	\N
f6f668a0-f4f6-11e9-b947-acde48001122	CAN	AB	Calgary, University of	\N	\N
f6f668b4-f4f6-11e9-b947-acde48001122	CAN	AB	Lethbridge, University of	\N	\N
f6f668c8-f4f6-11e9-b947-acde48001122	CAN	BC	Notre-Dame U. Nelson B.C.	\N	\N
f6f668dc-f4f6-11e9-b947-acde48001122	CAN	BC	British Columbia,University of	\N	\N
f6f668fa-f4f6-11e9-b947-acde48001122	CAN	BC	Simon Fraser University	\N	\N
f6f6690e-f4f6-11e9-b947-acde48001122	CAN	BC	Victoria, University of	\N	\N
f6f66922-f4f6-11e9-b947-acde48001122	CAN	BC	Royal Roads Military College	\N	\N
f6f66936-f4f6-11e9-b947-acde48001122	CAN	BC	Trinity Western University	\N	\N
f6f66954-f4f6-11e9-b947-acde48001122	CAN	BC	Northern British Columbia U.	\N	\N
f6f66968-f4f6-11e9-b947-acde48001122	CAN	BC	Royal Roads University	\N	\N
f6f6697c-f4f6-11e9-b947-acde48001122	CAN	\N	Other Canadian University	\N	\N
f6f6699a-f4f6-11e9-b947-acde48001122	CAN	\N	University Outside Canada	\N	\N
f6f669ae-f4f6-11e9-b947-acde48001122	CAN	NS	Canadian Coast Guard College	\N	\N
f6f669c2-f4f6-11e9-b947-acde48001122	CAN	NL	Fisheries & Marine Inst.	\N	\N
f6f669d6-f4f6-11e9-b947-acde48001122	CAN	NL	College of the North Atlantic	\N	\N
f6f669f4-f4f6-11e9-b947-acde48001122	CAN	PE	Holland College	\N	\N
f6f66a08-f4f6-11e9-b947-acde48001122	CAN	NB	Maritime Forest Ranger School	\N	\N
f6f66a1c-f4f6-11e9-b947-acde48001122	CAN	NB	Community Colleges - Bathurst	\N	\N
f6f66a3a-f4f6-11e9-b947-acde48001122	CAN	NS	Nova Scotia Agricultural Col.	\N	\N
f6f66a4e-f4f6-11e9-b947-acde48001122	CAN	NS	Institute of Technology Campus	\N	\N
f6f66a62-f4f6-11e9-b947-acde48001122	CAN	NS	Nova Scotia Survey Institute	\N	\N
f6f66a76-f4f6-11e9-b947-acde48001122	CAN	NS	Nova Scotia Teachers College	\N	\N
f6f66aa8-f4f6-11e9-b947-acde48001122	CAN	PE	Atlantic Veterinary Col. (PEI)	\N	\N
f6f66abc-f4f6-11e9-b947-acde48001122	CAN	NS	Annapolis Campus, NS Cmnty Col	\N	\N
f6f66ad0-f4f6-11e9-b947-acde48001122	CAN	NS	Burridge Campus-Yarmouth	\N	\N
f6f66aee-f4f6-11e9-b947-acde48001122	CAN	NS	Cape Breton Adult Vocat'l Trng	\N	\N
f6f66b02-f4f6-11e9-b947-acde48001122	CAN	NS	Geogr. Sci. Col.-Lawrencetown	\N	\N
f6f66b16-f4f6-11e9-b947-acde48001122	CAN	NS	Cumberland Campus,NS Cmnty Col	\N	\N
f6f68efc-f4f6-11e9-b947-acde48001122	CAN	NS	Dartmouth Adult Vocat'l Trng	\N	\N
f6f68f24-f4f6-11e9-b947-acde48001122	CAN	NS	Halifax Campus, NS Cmnty Col.	\N	\N
f6f68f42-f4f6-11e9-b947-acde48001122	CAN	NS	Hants Campus, NS Cmnty Col.	\N	\N
f6f68f56-f4f6-11e9-b947-acde48001122	CAN	NS	I.W. Akerley Campus-Dartmouth	\N	\N
f6f68f74-f4f6-11e9-b947-acde48001122	CAN	NS	Lunenberg Campus-Bridgewater	\N	\N
f6f68f88-f4f6-11e9-b947-acde48001122	CAN	NS	Nautical Inst. Campus, NS C.C.	\N	\N
f6f68f9c-f4f6-11e9-b947-acde48001122	CAN	NS	Pictou Campus, NS Cmnty Col.	\N	\N
f6f68fba-f4f6-11e9-b947-acde48001122	CAN	NS	Schelburne Campus,NS Cmnty Col	\N	\N
f6f68fce-f4f6-11e9-b947-acde48001122	CAN	NS	Strait Campus, NS Cmnty Col.	\N	\N
f6f68fe2-f4f6-11e9-b947-acde48001122	CAN	NS	Sydney Campus-Sydney	\N	\N
f6f68ff6-f4f6-11e9-b947-acde48001122	CAN	NS	Cobetc-Truro	\N	\N
f6f69014-f4f6-11e9-b947-acde48001122	CAN	NS	Kingstec-Kentville	\N	\N
f6f69028-f4f6-11e9-b947-acde48001122	CAN	NS	Memorial Composite-SydneyMines	\N	\N
f6f6903c-f4f6-11e9-b947-acde48001122	CAN	NS	Truro Campus (Community Col.)	\N	\N
f6f6905a-f4f6-11e9-b947-acde48001122	CAN	NS	Colchester Campus	\N	\N
f6f6906e-f4f6-11e9-b947-acde48001122	CAN	NL	Eastern Cmnt Col.(Clarenville)	\N	\N
f6f690aa-f4f6-11e9-b947-acde48001122	CAN	NL	Westviking Col. (Stephenville)	\N	\N
f6f690be-f4f6-11e9-b947-acde48001122	CAN	NL	Labrador College	\N	\N
f6f690dc-f4f6-11e9-b947-acde48001122	CAN	NL	Central Applied Arts,Tech&C.Ed	\N	\N
f6f690f0-f4f6-11e9-b947-acde48001122	CAN	QC	Baie-Comeau, Collège de	\N	\N
f6f69104-f4f6-11e9-b947-acde48001122	CAN	QC	Côte-Nord (Hauterive), Col. de	\N	\N
f6f69118-f4f6-11e9-b947-acde48001122	CAN	QC	Côte-Nord(Manicouagan),Col. de	\N	\N
f6f69136-f4f6-11e9-b947-acde48001122	CAN	QC	Côte-Nord (Mingan), Collège de	\N	\N
f6f6914a-f4f6-11e9-b947-acde48001122	CAN	QC	Sept-Îles, Collège de	\N	\N
f6f6915e-f4f6-11e9-b947-acde48001122	CAN	QC	François-Xavier-Garneau, Col.	\N	\N
f6f6917c-f4f6-11e9-b947-acde48001122	CAN	QC	Gaspésie et des Îles, Col. de	\N	\N
f6f69190-f4f6-11e9-b947-acde48001122	CAN	QC	Institut maritime du Québec	\N	\N
f6f691a4-f4f6-11e9-b947-acde48001122	CAN	QC	Pocatière, Collège de la	\N	\N
f6f691c2-f4f6-11e9-b947-acde48001122	CAN	QC	Inst. tech. agro-ali Pocatière	\N	\N
f6f691d6-f4f6-11e9-b947-acde48001122	CAN	QC	Lévis-Lauzon, Collège	\N	\N
f6f691ea-f4f6-11e9-b947-acde48001122	CAN	QC	Limoilou, Collège de	\N	\N
f6f691fe-f4f6-11e9-b947-acde48001122	CAN	QC	Matane, Collège de	\N	\N
f6f69212-f4f6-11e9-b947-acde48001122	CAN	QC	Rimouski, Collège de	\N	\N
f6f69230-f4f6-11e9-b947-acde48001122	CAN	QC	Rivière-du Loup, Collège de	\N	\N
f6f69244-f4f6-11e9-b947-acde48001122	CAN	QC	Sainte-Foy, Collège de	\N	\N
f6f69258-f4f6-11e9-b947-acde48001122	CAN	QC	Alma, Collège d'	\N	\N
f6f6926c-f4f6-11e9-b947-acde48001122	CAN	QC	Chicoutimi, Collège de	\N	\N
f6f6928a-f4f6-11e9-b947-acde48001122	CAN	QC	Jonquière, Collège de	\N	\N
f6f6929e-f4f6-11e9-b947-acde48001122	CAN	QC	Saint-Félicien, Collège de	\N	\N
f6f692d0-f4f6-11e9-b947-acde48001122	CAN	QC	Shawinigan, Collège de	\N	\N
f6f692ee-f4f6-11e9-b947-acde48001122	CAN	QC	Lauzon, Col. de Technologie de	\N	\N
f6f69302-f4f6-11e9-b947-acde48001122	CAN	QC	Région Amiante(Thetford Mines)	\N	\N
f6f69320-f4f6-11e9-b947-acde48001122	CAN	QC	Trois-Rivières, Collège de	\N	\N
f6f69334-f4f6-11e9-b947-acde48001122	CAN	QC	Victoriaville, Collège de	\N	\N
f6f69348-f4f6-11e9-b947-acde48001122	CAN	QC	Ahuntsic, Collège	\N	\N
f6f69366-f4f6-11e9-b947-acde48001122	CAN	QC	André Laurendeau, Collège	\N	\N
f6f6937a-f4f6-11e9-b947-acde48001122	CAN	QC	Bois-de-Boulogne, Collège	\N	\N
f6f6938e-f4f6-11e9-b947-acde48001122	CAN	QC	Drummonville, Collège de	\N	\N
f6f693ac-f4f6-11e9-b947-acde48001122	CAN	QC	Saint-Hyacinthe, Collège de	\N	\N
f6f693ca-f4f6-11e9-b947-acde48001122	CAN	QC	Tracy-Sorel, Collège	\N	\N
f6f693de-f4f6-11e9-b947-acde48001122	CAN	QC	Champlain Col. - Lennoxville	\N	\N
f6f693f2-f4f6-11e9-b947-acde48001122	CAN	QC	Champlain Col. - St-Lambert	\N	\N
f6f69406-f4f6-11e9-b947-acde48001122	CAN	QC	Champlain Col. - St-Lawrence	\N	\N
f6f69424-f4f6-11e9-b947-acde48001122	CAN	QC	Granby-Haute-Yamaska, Col. de	\N	\N
f6f69438-f4f6-11e9-b947-acde48001122	CAN	QC	Private colleges	\N	\N
f6f6944c-f4f6-11e9-b947-acde48001122	CAN	QC	Dawson College	\N	\N
f6f6946a-f4f6-11e9-b947-acde48001122	CAN	QC	Édouard-Montpetit, Collège	\N	\N
f6f6947e-f4f6-11e9-b947-acde48001122	CAN	QC	Outaouais, Collège de l'	\N	\N
f6f6949c-f4f6-11e9-b947-acde48001122	CAN	QC	Maisonneuve, Collège	\N	\N
f6f694b0-f4f6-11e9-b947-acde48001122	CAN	QC	John Abbott College	\N	\N
f6f694c4-f4f6-11e9-b947-acde48001122	CAN	QC	Joliette-De Lanaudière, Col.	\N	\N
f6f694d8-f4f6-11e9-b947-acde48001122	CAN	QC	Lionel-Groulx, Collège	\N	\N
f6f6950a-f4f6-11e9-b947-acde48001122	CAN	QC	Montmorency, Collège	\N	\N
f6f6951e-f4f6-11e9-b947-acde48001122	CAN	QC	Rosemont, Collège	\N	\N
f6f6953c-f4f6-11e9-b947-acde48001122	CAN	QC	Abitibi-Témiscamingue, Col. de	\N	\N
f6f69550-f4f6-11e9-b947-acde48001122	CAN	QC	Inst.Tech.Agro-ali StHyacinthe	\N	\N
f6f69564-f4f6-11e9-b947-acde48001122	CAN	QC	Saint-Jean-Sur-Richelieu, Col.	\N	\N
f6f69578-f4f6-11e9-b947-acde48001122	CAN	QC	Saint-Jérôme, Collège de	\N	\N
f6f69596-f4f6-11e9-b947-acde48001122	CAN	QC	Saint-Laurent, Collège de	\N	\N
f6f695aa-f4f6-11e9-b947-acde48001122	CAN	QC	Valleyfield, Collège de	\N	\N
f6f695be-f4f6-11e9-b947-acde48001122	CAN	QC	Sherbrooke, Collège de	\N	\N
f6f695d2-f4f6-11e9-b947-acde48001122	CAN	QC	Tracy, Col. de Technologie de	\N	\N
f6f695f0-f4f6-11e9-b947-acde48001122	CAN	QC	Inst. tourisme/d'hôtellerie QC	\N	\N
f6f69604-f4f6-11e9-b947-acde48001122	CAN	QC	Vanier College	\N	\N
f6f69618-f4f6-11e9-b947-acde48001122	CAN	QC	Vieux-Montréal, Collège du	\N	\N
f6f69636-f4f6-11e9-b947-acde48001122	CAN	QC	Académie Centenniale	\N	\N
f6f6964a-f4f6-11e9-b947-acde48001122	CAN	QC	André-Grasset, Collège	\N	\N
f6f6965e-f4f6-11e9-b947-acde48001122	CAN	QC	Bart, Collège	\N	\N
f6f69672-f4f6-11e9-b947-acde48001122	CAN	QC	Beauce-Appalaches, Collège	\N	\N
f6f69690-f4f6-11e9-b947-acde48001122	CAN	QC	Notre-Dame-de-Foy Campus	\N	\N
f6f696a4-f4f6-11e9-b947-acde48001122	CAN	QC	Centre spécialisé pêche (G-R)	\N	\N
f6f696b8-f4f6-11e9-b947-acde48001122	CAN	QC	Affaires Ellis Inc.,Collège d'	\N	\N
f6f696d6-f4f6-11e9-b947-acde48001122	CAN	QC	Lévis, Collège de	\N	\N
f6f696ea-f4f6-11e9-b947-acde48001122	CAN	QC	Secrétariat Notre-Dame, Col.	\N	\N
f6f696fe-f4f6-11e9-b947-acde48001122	CAN	QC	Français, Collège	\N	\N
f6f69730-f4f6-11e9-b947-acde48001122	CAN	QC	Militaire royal St-Jean, Col.	\N	\N
f6f69744-f4f6-11e9-b947-acde48001122	CAN	QC	Conserv. de musique Chicoutimi	\N	\N
f6f69762-f4f6-11e9-b947-acde48001122	CAN	QC	Conserv. de musique de Hull	\N	\N
f6f69776-f4f6-11e9-b947-acde48001122	CAN	QC	Conserv. de musique Montréal	\N	\N
f6f6978a-f4f6-11e9-b947-acde48001122	CAN	QC	Conserv. de musique de Québec	\N	\N
f6f697a8-f4f6-11e9-b947-acde48001122	CAN	QC	Conserv. de musique Rimouski	\N	\N
f6f697bc-f4f6-11e9-b947-acde48001122	CAN	QC	Conserv. de musique Trois-Riv.	\N	\N
f6f697da-f4f6-11e9-b947-acde48001122	CAN	QC	Conserv. de musique Val-d'or	\N	\N
f6f697ee-f4f6-11e9-b947-acde48001122	CAN	QC	Conservatoire Lasalle	\N	\N
f6f69802-f4f6-11e9-b947-acde48001122	CAN	QC	Commerciale du Cap, École	\N	\N
f6f69820-f4f6-11e9-b947-acde48001122	CAN	QC	Vincent-d'Indy, École	\N	\N
f6f69834-f4f6-11e9-b947-acde48001122	CAN	QC	Heritage College	\N	\N
f6f69848-f4f6-11e9-b947-acde48001122	CAN	QC	Institut Teccart	\N	\N
f6f6985c-f4f6-11e9-b947-acde48001122	CAN	QC	Jean-de-Brébeuf, Collège	\N	\N
f6f6987a-f4f6-11e9-b947-acde48001122	CAN	QC	L'Assomption, Collège de	\N	\N
f6f6988e-f4f6-11e9-b947-acde48001122	CAN	QC	Laflèche, Collège	\N	\N
f6f699d8-f4f6-11e9-b947-acde48001122	CAN	QC	LaSalle, Collège	\N	\N
f6f699ec-f4f6-11e9-b947-acde48001122	CAN	QC	Macdonald Campus (McGill)	\N	\N
f6f69a0a-f4f6-11e9-b947-acde48001122	CAN	QC	Marianopolis College	\N	\N
f6f69a1e-f4f6-11e9-b947-acde48001122	CAN	QC	Marie-Victorin, Collège	\N	\N
f6f69a3c-f4f6-11e9-b947-acde48001122	CAN	QC	Mérici, Collège	\N	\N
f6f69a50-f4f6-11e9-b947-acde48001122	CAN	QC	Moderne 3-R, Collège	\N	\N
f6f69a6e-f4f6-11e9-b947-acde48001122	CAN	QC	O'Sullivan de Montréal, Col.	\N	\N
f6f69aa0-f4f6-11e9-b947-acde48001122	CAN	QC	O'Sullivan de Québec, Collège	\N	\N
f6f69ab4-f4f6-11e9-b947-acde48001122	CAN	QC	Petit Séminaire de Québec	\N	\N
f6f69ad2-f4f6-11e9-b947-acde48001122	CAN	QC	Sherbrooke, Séminaire de	\N	\N
f6f69ae6-f4f6-11e9-b947-acde48001122	CAN	QC	Saint-Augustin, Séminaire	\N	\N
f6f69b04-f4f6-11e9-b947-acde48001122	CAN	QC	Villa Sainte-Marcelline	\N	\N
f6f69b18-f4f6-11e9-b947-acde48001122	CAN	QC	Québec UNIV, téléuniversité	\N	\N
f6f69b2c-f4f6-11e9-b947-acde48001122	CAN	ON	Algoma College	\N	\N
f6f69b4a-f4f6-11e9-b947-acde48001122	CAN	ON	Algonquin College	\N	\N
f6f69b5e-f4f6-11e9-b947-acde48001122	CAN	ON	Cambrian College	\N	\N
f6f69b7c-f4f6-11e9-b947-acde48001122	CAN	ON	Canadore College	\N	\N
f6f69b90-f4f6-11e9-b947-acde48001122	CAN	ON	Centennial College	\N	\N
f6f69ba4-f4f6-11e9-b947-acde48001122	CAN	ON	Centralia Col. Agricul. Tech.	\N	\N
f6f69bc2-f4f6-11e9-b947-acde48001122	CAN	ON	Conestoga Applied Arts & Tech.	\N	\N
f6f69bd6-f4f6-11e9-b947-acde48001122	CAN	ON	ConfederationApplied Arts&Tech	\N	\N
f6f69bea-f4f6-11e9-b947-acde48001122	CAN	ON	Durham Col. Applied Arts&Tech.	\N	\N
f6f69c08-f4f6-11e9-b947-acde48001122	CAN	ON	Fanshawe Applied Arts & Tech.	\N	\N
f6f69c1c-f4f6-11e9-b947-acde48001122	CAN	ON	George Brown Applied Arts&Tech	\N	\N
f6f69c30-f4f6-11e9-b947-acde48001122	CAN	ON	Georgian Applied Arts & Tech.	\N	\N
f6f69c4e-f4f6-11e9-b947-acde48001122	CAN	ON	Humber Col. Applied Arts &Tech	\N	\N
f6f69c62-f4f6-11e9-b947-acde48001122	CAN	ON	Kemptville Col. Agricult. Tech	\N	\N
f6f69c76-f4f6-11e9-b947-acde48001122	CAN	ON	Lakehead College	\N	\N
f6f69c94-f4f6-11e9-b947-acde48001122	CAN	ON	Lambton College	\N	\N
f6f69cbc-f4f6-11e9-b947-acde48001122	CAN	ON	Loyalist College	\N	\N
f6f69cda-f4f6-11e9-b947-acde48001122	CAN	ON	Mohawk College	\N	\N
f6f69cee-f4f6-11e9-b947-acde48001122	CAN	ON	New Liskeard Col. Agricul.Tech	\N	\N
f6f69d0c-f4f6-11e9-b947-acde48001122	CAN	ON	Niagara College	\N	\N
f6f69d20-f4f6-11e9-b947-acde48001122	CAN	ON	Nipissing College	\N	\N
f6f69d3e-f4f6-11e9-b947-acde48001122	CAN	ON	Northern College	\N	\N
f6f69d52-f4f6-11e9-b947-acde48001122	CAN	ON	Ontario College of Arts	\N	\N
f6f69d70-f4f6-11e9-b947-acde48001122	CAN	ON	Ridgetown Col. Agricul. Tech.	\N	\N
f6f69d84-f4f6-11e9-b947-acde48001122	CAN	ON	Ryerson College	\N	\N
f6f69da2-f4f6-11e9-b947-acde48001122	CAN	ON	Saint Clair College	\N	\N
f6f69db6-f4f6-11e9-b947-acde48001122	CAN	ON	Saint Lawrence College	\N	\N
f6f69dd4-f4f6-11e9-b947-acde48001122	CAN	ON	Sault Col. Applied Arts & Tech	\N	\N
f6f69de8-f4f6-11e9-b947-acde48001122	CAN	ON	Seneca College	\N	\N
f6f69dfc-f4f6-11e9-b947-acde48001122	CAN	ON	Sheridan College	\N	\N
f6f69e1a-f4f6-11e9-b947-acde48001122	CAN	ON	Sir Sanford Fleming Arts &Tech	\N	\N
f6f69e2e-f4f6-11e9-b947-acde48001122	CAN	ON	La Cité collégiale	\N	\N
f6f69e42-f4f6-11e9-b947-acde48001122	CAN	ON	Redeemer Reformed ChristianCol	\N	\N
f6f6a982-f4f6-11e9-b947-acde48001122	CAN	ON	Boréal, Collège	\N	\N
f6f6a9be-f4f6-11e9-b947-acde48001122	CAN	ON	U of Ont. Inst. of Tech.	\N	\N
f6f6a9dc-f4f6-11e9-b947-acde48001122	CAN	MB	Assiniboine Community College	\N	\N
f6f6a9f0-f4f6-11e9-b947-acde48001122	CAN	MB	Keewatin Community College	\N	\N
f6f6aa04-f4f6-11e9-b947-acde48001122	CAN	\N	Red River Community College	\N	\N
f6f6aa22-f4f6-11e9-b947-acde48001122	CAN	SK	SK Institute Applied Arts &Sci	\N	\N
f6f6aa36-f4f6-11e9-b947-acde48001122	CAN	SK	Saskatchewan Technological Ins	\N	\N
f6f6aa68-f4f6-11e9-b947-acde48001122	CAN	SK	Carlton Trail Regional College	\N	\N
f6f6aa86-f4f6-11e9-b947-acde48001122	CAN	SK	Cumberland Regional College	\N	\N
f6f6aa9a-f4f6-11e9-b947-acde48001122	CAN	SK	Cypress Hills Regional College	\N	\N
f6f6aaae-f4f6-11e9-b947-acde48001122	CAN	SK	Northlands College	\N	\N
f6f6aac2-f4f6-11e9-b947-acde48001122	CAN	SK	North West Regional College	\N	\N
f6f6aae0-f4f6-11e9-b947-acde48001122	CAN	SK	Parkland Regional College	\N	\N
f6f6aaf4-f4f6-11e9-b947-acde48001122	CAN	SK	Prairie West Regional College	\N	\N
f6f6ab08-f4f6-11e9-b947-acde48001122	CAN	SK	Saskatchewan Indian Tech Inst.	\N	\N
f6f6ab1c-f4f6-11e9-b947-acde48001122	CAN	SK	SK Inst. Applied Science &Tech	\N	\N
f6f6ab3a-f4f6-11e9-b947-acde48001122	CAN	SK	SK Ed. Trng & Empl. NorthernEd	\N	\N
f6f6ab4e-f4f6-11e9-b947-acde48001122	CAN	SK	SK Ed. Trng & Empl. Reg'l Col.	\N	\N
f6f6ab62-f4f6-11e9-b947-acde48001122	CAN	SK	South East Regional College	\N	\N
f6f6ab76-f4f6-11e9-b947-acde48001122	CAN	SK	Pallister Institute (SIAST)	\N	\N
f6f6ab8a-f4f6-11e9-b947-acde48001122	CAN	SK	Woodland Institute	\N	\N
f6f6aba8-f4f6-11e9-b947-acde48001122	CAN	AB	Camrose College	\N	\N
f6f6abbc-f4f6-11e9-b947-acde48001122	CAN	AB	Concordia College	\N	\N
f6f6abd0-f4f6-11e9-b947-acde48001122	CAN	AB	Fairview College	\N	\N
f6f6abe4-f4f6-11e9-b947-acde48001122	CAN	AB	Grand Prairie Regional College	\N	\N
f6f6ac02-f4f6-11e9-b947-acde48001122	CAN	AB	Grant MacEwan University	\N	\N
f6f6ac16-f4f6-11e9-b947-acde48001122	CAN	AB	Lethbridge Community College	\N	\N
f6f6ac2a-f4f6-11e9-b947-acde48001122	CAN	AB	Medicine Hat College	\N	\N
f6f6ac3e-f4f6-11e9-b947-acde48001122	CAN	AB	Mount Royal College	\N	\N
f6f6ac70-f4f6-11e9-b947-acde48001122	CAN	AB	Northern Alberta Inst. of Tech	\N	\N
f6f6ac8e-f4f6-11e9-b947-acde48001122	CAN	AB	Old Sun Community College	\N	\N
f6f6aca2-f4f6-11e9-b947-acde48001122	CAN	AB	Red Deer College	\N	\N
f6f6acb6-f4f6-11e9-b947-acde48001122	CAN	AB	Southern Alberta Inst. of Tech	\N	\N
f6f6acca-f4f6-11e9-b947-acde48001122	CAN	AB	Vermilion Campus (LakelandCol)	\N	\N
f6f6ace8-f4f6-11e9-b947-acde48001122	CAN	AB	Alberta Vocational College	\N	\N
f6f6acfc-f4f6-11e9-b947-acde48001122	CAN	AB	Augustana University College	\N	\N
f6f6ad10-f4f6-11e9-b947-acde48001122	CAN	AB	Keyano College	\N	\N
f6f6ad24-f4f6-11e9-b947-acde48001122	CAN	AB	Lakeland College	\N	\N
f6f6ad42-f4f6-11e9-b947-acde48001122	CAN	BC	British Columbia Inst. of Tech	\N	\N
f6f6ad56-f4f6-11e9-b947-acde48001122	CAN	BC	British Columbia Mining Col.	\N	\N
f6f6ad6a-f4f6-11e9-b947-acde48001122	CAN	BC	Kamloops College	\N	\N
f6f6ad7e-f4f6-11e9-b947-acde48001122	CAN	BC	Camosun College	\N	\N
f6f6b382-f4f6-11e9-b947-acde48001122	CAN	BC	Capilano College	\N	\N
f6f6b3be-f4f6-11e9-b947-acde48001122	CAN	BC	Cariboo, University College of	\N	\N
f6f6b3d2-f4f6-11e9-b947-acde48001122	CAN	BC	Columbia College	\N	\N
f6f6b3f0-f4f6-11e9-b947-acde48001122	CAN	BC	Douglas College	\N	\N
f6f6b404-f4f6-11e9-b947-acde48001122	CAN	BC	Kwantlen Polytechnic Uni.	\N	\N
f6f6b422-f4f6-11e9-b947-acde48001122	CAN	BC	Malaspina College	\N	\N
f6f6b454-f4f6-11e9-b947-acde48001122	CAN	BC	New Caledonia, College of	\N	\N
f6f6b468-f4f6-11e9-b947-acde48001122	CAN	BC	Okanagan University College	\N	\N
\.


--
-- Data for Name: second_language_proficiency; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.second_language_proficiency (id, reading_proficiency, writing_proficiency, oral_proficiency, reading_date, writing_date, oral_date) FROM stdin;
\.


--
-- Data for Name: sector; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.sector (id, description, acronym, address) FROM stdin;
\.


--
-- Data for Name: security_clearance; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.security_clearance (id, description_en, description_fr) FROM stdin;
6520ce9a-f760-11e9-abfa-3af9d3903da4	Reliability	\N
6520d6c4-f760-11e9-abfa-3af9d3903da4	Secret	\N
6520d70a-f760-11e9-abfa-3af9d3903da4	Top Secret	\N
\.


--
-- Data for Name: skill; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.skill (id, name, "createdAt", "updatedAt") FROM stdin;
7d50962c-f68d-11e9-a8cd-3af9d3903da4	JavaScript	\N	\N
9133c266-f68f-11e9-a8cd-3af9d3903da4	SQL	\N	\N
6040bc88-2d9d-4aba-8a88-7ec61e1021eb	Sequelize	2019-10-28	2019-10-28
63929bb8-9760-4b90-9120-f50cdbfac2ab	Feathers	2019-10-28	2019-10-28
\.


--
-- Data for Name: talent_matrix_result; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.talent_matrix_result (id, description_en, description_fr) FROM stdin;
d9aa29c8-f760-11e9-abfa-3af9d3903da4	Early Promise	\N
d9aa33f0-f760-11e9-abfa-3af9d3903da4	Exceptional Talent	\N
d9aa3440-f760-11e9-abfa-3af9d3903da4	Future Achiever	\N
d9aa345e-f760-11e9-abfa-3af9d3903da4	Growth Employee	\N
d9aa3472-f760-11e9-abfa-3af9d3903da4	Solid Contributor	\N
d9aa3486-f760-11e9-abfa-3af9d3903da4	Solid Professional	\N
d9aa349a-f760-11e9-abfa-3af9d3903da4	Strong Performer	\N
d9aa34ae-f760-11e9-abfa-3af9d3903da4	Talent Risk	\N
d9aa34c2-f760-11e9-abfa-3af9d3903da4	Trusted Professional	\N
\.


--
-- Data for Name: user; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."user" (id, first_name, last_name, email, job_title, phone, mobile, location, manager, team, first_language, second_language, second_language_proficiency_id, employment_status_id, group_level_id, year_service, security_clearance_id, department_id, sector_id, branch_id, directorate_id, linkedin, github, career_mobility_id, talent_matrix_result_id, key_competency_id, division_id) FROM stdin;
240e4b78-f768-11e9-abfa-3af9d3903da4	Trevor	Bivi	trevor.bivi@canada.ca	Developer	\N	\N	\N	\N	\N	EN	\N	\N	647f9072-f75e-11e9-abfa-3af9d3903da4	198f30f2-f760-11e9-abfa-3af9d3903da4	1	6520ce9a-f760-11e9-abfa-3af9d3903da4	c04da846-f766-11e9-abfa-3af9d3903da4	\N	\N	\N	\N	\N	\N	\N	\N	\N
240e4cfe-f768-11e9-abfa-3af9d3903da4	Mamadou	Bah	mamadoumoustapha.bah@canada.ca	Developer	\N	\N	\N	\N	\N	EN	\N	\N	647f9072-f75e-11e9-abfa-3af9d3903da4	198f30f2-f760-11e9-abfa-3af9d3903da4	1	6520ce9a-f760-11e9-abfa-3af9d3903da4	c04da846-f766-11e9-abfa-3af9d3903da4	\N	\N	\N	\N	\N	\N	\N	\N	\N
240e4e20-f768-11e9-abfa-3af9d3903da4	Rizvi	Rab	rizvi.rab@canada.ca	Developer	\N	\N	\N	\N	\N	EN	\N	\N	647f9072-f75e-11e9-abfa-3af9d3903da4	198f30f2-f760-11e9-abfa-3af9d3903da4	1	6520ce9a-f760-11e9-abfa-3af9d3903da4	c04da846-f766-11e9-abfa-3af9d3903da4	\N	\N	\N	\N	\N	\N	\N	\N	\N
\.


--
-- Data for Name: user_competency; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.user_competency (id, user_id, competency_id) FROM stdin;
\.


--
-- Data for Name: user_developmental_goal; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.user_developmental_goal (id, user_id, competency_id) FROM stdin;
\.


--
-- Data for Name: user_organization; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.user_organization (id, user_id, organization_id, start_date, end_date, current) FROM stdin;
\.


--
-- Data for Name: user_project; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.user_project (id, user_id, project) FROM stdin;
\.


--
-- Data for Name: user_skill; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.user_skill (id, user_id, skill_id) FROM stdin;
\.


--
-- Name: db_id_seq; Type: SEQUENCE SET; Schema: public; Owner: rizvirab
--

SELECT pg_catalog.setval('public.db_id_seq', 1, false);


--
-- Name: branch branch_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.branch
    ADD CONSTRAINT branch_pk PRIMARY KEY (id);


--
-- Name: career_journey career_journey_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.career_journey
    ADD CONSTRAINT career_journey_pk PRIMARY KEY (id);


--
-- Name: career_mobility career_mobility_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.career_mobility
    ADD CONSTRAINT career_mobility_pk PRIMARY KEY (id);


--
-- Name: competency comp_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.competency
    ADD CONSTRAINT comp_pk PRIMARY KEY (id);


--
-- Name: competency comp_un; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.competency
    ADD CONSTRAINT comp_un UNIQUE (name);


--
-- Name: db db_pkey; Type: CONSTRAINT; Schema: public; Owner: rizvirab
--

ALTER TABLE ONLY public.db
    ADD CONSTRAINT db_pkey PRIMARY KEY (id);


--
-- Name: department department_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.department
    ADD CONSTRAINT department_pk PRIMARY KEY (id);


--
-- Name: directorate directorate_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.directorate
    ADD CONSTRAINT directorate_pk PRIMARY KEY (id);


--
-- Name: division division_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.division
    ADD CONSTRAINT division_pk PRIMARY KEY (id);


--
-- Name: education education_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.education
    ADD CONSTRAINT education_pk PRIMARY KEY (id);


--
-- Name: employment_status employment_status_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.employment_status
    ADD CONSTRAINT employment_status_pk PRIMARY KEY (id);


--
-- Name: group_level group_level_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.group_level
    ADD CONSTRAINT group_level_pk PRIMARY KEY (id);


--
-- Name: key_competency key_competency_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.key_competency
    ADD CONSTRAINT key_competency_pk PRIMARY KEY (id);


--
-- Name: organization organization_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.organization
    ADD CONSTRAINT organization_pk PRIMARY KEY (id);


--
-- Name: school postSecondary_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.school
    ADD CONSTRAINT "postSecondary_pkey" PRIMARY KEY (id);


--
-- Name: second_language_proficiency second_language_proficiency_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.second_language_proficiency
    ADD CONSTRAINT second_language_proficiency_pk PRIMARY KEY (id);


--
-- Name: sector sector_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sector
    ADD CONSTRAINT sector_pk PRIMARY KEY (id);


--
-- Name: security_clearance security_clearance_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.security_clearance
    ADD CONSTRAINT security_clearance_pk PRIMARY KEY (id);


--
-- Name: skill skill_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.skill
    ADD CONSTRAINT skill_pk PRIMARY KEY (id);


--
-- Name: skill skill_un; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.skill
    ADD CONSTRAINT skill_un UNIQUE (name);


--
-- Name: talent_matrix_result talent_matrix_result_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.talent_matrix_result
    ADD CONSTRAINT talent_matrix_result_pk PRIMARY KEY (id);


--
-- Name: user_competency user_competency_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_competency
    ADD CONSTRAINT user_competency_pk PRIMARY KEY (id);


--
-- Name: user_developmental_goal user_developmental_goal_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_developmental_goal
    ADD CONSTRAINT user_developmental_goal_pk PRIMARY KEY (id);


--
-- Name: user_organization user_organization_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_organization
    ADD CONSTRAINT user_organization_pk PRIMARY KEY (id);


--
-- Name: user user_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_pk PRIMARY KEY (id);


--
-- Name: user_project user_project_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_project
    ADD CONSTRAINT user_project_pk PRIMARY KEY (id);


--
-- Name: user_skill user_skill_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_skill
    ADD CONSTRAINT user_skill_pk PRIMARY KEY (id);


--
-- Name: user branch_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT branch_fk FOREIGN KEY (branch_id) REFERENCES public.branch(id) ON DELETE SET NULL;


--
-- Name: user clearance_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT clearance_fk FOREIGN KEY (security_clearance_id) REFERENCES public.security_clearance(id);


--
-- Name: user_competency competency_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_competency
    ADD CONSTRAINT competency_fk FOREIGN KEY (competency_id) REFERENCES public.competency(id);


--
-- Name: user department_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT department_fk FOREIGN KEY (department_id) REFERENCES public.department(id);


--
-- Name: user_developmental_goal developmental_goal_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_developmental_goal
    ADD CONSTRAINT developmental_goal_fk FOREIGN KEY (competency_id) REFERENCES public.competency(id);


--
-- Name: user directorate_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT directorate_fk FOREIGN KEY (directorate_id) REFERENCES public.directorate(id) ON DELETE SET NULL;


--
-- Name: user division_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT division_fk FOREIGN KEY (division_id) REFERENCES public.division(id);


--
-- Name: user group_level_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT group_level_fk FOREIGN KEY (group_level_id) REFERENCES public.group_level(id);


--
-- Name: user key_comp_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT key_comp_fk FOREIGN KEY (key_competency_id) REFERENCES public.key_competency(id);


--
-- Name: user matrix_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT matrix_fk FOREIGN KEY (talent_matrix_result_id) REFERENCES public.talent_matrix_result(id);


--
-- Name: user mobility_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT mobility_fk FOREIGN KEY (career_mobility_id) REFERENCES public.career_mobility(id);


--
-- Name: user_organization organization_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_organization
    ADD CONSTRAINT organization_fk FOREIGN KEY (organization_id) REFERENCES public.organization(id);


--
-- Name: education school_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.education
    ADD CONSTRAINT school_fk FOREIGN KEY (school_id) REFERENCES public.school(id);


--
-- Name: user sec_lang_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT sec_lang_fk FOREIGN KEY (second_language_proficiency_id) REFERENCES public.second_language_proficiency(id) ON DELETE SET NULL;


--
-- Name: user sector_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT sector_fk FOREIGN KEY (sector_id) REFERENCES public.sector(id) ON DELETE SET NULL;


--
-- Name: user_skill skill_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_skill
    ADD CONSTRAINT skill_fk FOREIGN KEY (skill_id) REFERENCES public.skill(id) ON DELETE CASCADE;


--
-- Name: user status_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT status_fk FOREIGN KEY (employment_status_id) REFERENCES public.employment_status(id);


--
-- Name: user_skill user_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_skill
    ADD CONSTRAINT user_fk FOREIGN KEY (user_id) REFERENCES public."user"(id) ON DELETE CASCADE;


--
-- Name: user_competency user_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_competency
    ADD CONSTRAINT user_fk FOREIGN KEY (user_id) REFERENCES public."user"(id) ON DELETE CASCADE;


--
-- Name: user_developmental_goal user_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_developmental_goal
    ADD CONSTRAINT user_fk FOREIGN KEY (user_id) REFERENCES public."user"(id) ON DELETE CASCADE;


--
-- Name: education user_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.education
    ADD CONSTRAINT user_fk FOREIGN KEY (user_id) REFERENCES public."user"(id) ON DELETE CASCADE;


--
-- Name: career_journey user_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.career_journey
    ADD CONSTRAINT user_fk FOREIGN KEY (user_id) REFERENCES public."user"(id) ON DELETE CASCADE;


--
-- Name: user_project user_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_project
    ADD CONSTRAINT user_fk FOREIGN KEY (user_id) REFERENCES public."user"(id) ON DELETE CASCADE;


--
-- Name: user_organization user_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_organization
    ADD CONSTRAINT user_fk FOREIGN KEY (user_id) REFERENCES public."user"(id);


--
-- PostgreSQL database dump complete
--

