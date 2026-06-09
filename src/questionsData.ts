import { Question } from './types';

export const INFORMATION_SECURITY_QUESTIONS: Question[] = [
  {
    id: "sec_q1",
    number: 1,
    text: "Which of the following keys is required to handle the data when encryption is applied to the data so that an unauthorized user cannot access the data?",
    options: [
      "Primary key",
      "Encryption key",
      "Authorized key",
      "Decryption key"
    ],
    correctAnswer: "D",
    explanation: "Decryption is the process of transforming encrypted data (ciphertext) back into its original readable format. Hence, a decryption key is required by the authorized recipient to decrypt and handle the data.",
    category: "Cryptography",
    source: "Haramaya University Mock Exam"
  },
  {
    id: "sec_q2",
    number: 2,
    text: "Encryption and decryption are functions of which of the following layers of the OSI reference model?",
    options: [
      "Transport layer",
      "Session layer",
      "Presentation layer",
      "None of the Above"
    ],
    correctAnswer: "C",
    explanation: "The Presentation layer (Layer 6) of the OSI model is responsible for data translation, compression, and encryption/decryption services, ensuring data is formatted correctly for the Application layer.",
    category: "Cryptography",
    source: "Haramaya University Mock Exam"
  },
  {
    id: "sec_q3",
    number: 3,
    text: "John recently received an electronic mail message from Bill. What information security objective would need to be met to convince John that Bill was actually the sender of the message?",
    options: [
      "Authenticity",
      "Availability",
      "Confidentiality",
      "Integrity"
    ],
    correctAnswer: "A",
    explanation: "Authenticity refers to verifying the identity of a sender or origin of a message. It provides assurance to the recipient (John) that the message indeed came from the claimed sender (Bill).",
    category: "Access Control & Authentication",
    source: "Haramaya University Mock Exam"
  },
  {
    id: "sec_q4",
    number: 4,
    text: "What is the Diffie-Hellman algorithm most commonly used for?",
    options: [
      "Signing digital contracts",
      "Key exchange",
      "Secure e-mail",
      "Storing encrypted passwords"
    ],
    correctAnswer: "B",
    explanation: "The Diffie-Hellman algorithm is a key-agreement protocol that allows two parties to securely establish a shared secret key over an insecure communication channel, which can then be used for symmetric encryption.",
    category: "Cryptography",
    source: "Haramaya University Mock Exam"
  },
  {
    id: "sec_q5",
    number: 5,
    text: "In an e-commerce transaction, an organization is validating the customer through a digital signature when they receive a communication from the customer. How can this be done?",
    options: [
      "A hash of the message can be transmitted and encrypted with the organization's private key.",
      "A hash of the message can be transmitted and encrypted with the customer's private key.",
      "A hash of the message can be transmitted and encrypted with the customer's public key.",
      "A hash of the message can be transmitted and encrypted with the organization's public key."
    ],
    correctAnswer: "B",
    explanation: "A digital signature is created by generating a hash of the message and then encrypting that hash with the sender's (customer's) private key. The receiver decrypts it with the customer's public key to guarantee authenticity and non-repudiation.",
    category: "Cryptography",
    source: "Haramaya University Mock Exam"
  },
  {
    id: "sec_q6",
    number: 6,
    text: "What is the main requirement or objective of cryptography?",
    options: [
      "To avoid unauthorized alteration of information being stored",
      "To avoid unauthorized access of network resources",
      "To avoid unauthorized access of information being transmitted",
      "To avoid unauthorized access of network servers"
    ],
    correctAnswer: "C",
    explanation: "The central requirement of encryption in cryptography is confidentiality—to shield data during transmission from eavesdropping or unauthorized reading by interceptors.",
    category: "Cryptography",
    source: "Haramaya University Mock Exam"
  },
  {
    id: "sec_q7",
    number: 7,
    text: "A _________ is a program that takes control of another computer connected to the Internet, then uses that computer to launch attacks.",
    options: [
      "Worm",
      "Virus",
      "Zombie",
      "Trap door"
    ],
    correctAnswer: "C",
    explanation: "A zombie is a compromised computer connected to the Internet that has been silently hijacked by a hacker via malware, allowing it to be used remotely as part of a botnet to launch DDoS attacks or send spam.",
    category: "Network Security",
    source: "Haramaya University Mock Exam"
  },
  {
    id: "sec_q8",
    number: 8,
    text: "What is non-repudiation?",
    options: [
      "Something you can't deny.",
      "Something you can hide.",
      "Something you can deny.",
      "Something that went a bye."
    ],
    correctAnswer: "A",
    explanation: "Non-repudiation is the assurance that a party to a communication or transaction cannot deny having sent a message or committed an action, typically validated via digital signatures.",
    category: "Access Control & Authentication",
    source: "Haramaya University Mock Exam"
  },
  {
    id: "sec_q9",
    number: 9,
    text: "Which of the following algorithms generates a 160-bit hash value?",
    options: [
      "MD5",
      "RC4",
      "AES",
      "SHA-1"
    ],
    correctAnswer: "D",
    explanation: "SHA-1 produces a 160-bit hash value (message digest). MD5 produces 128 bits. AES is a block cipher (not a hashing algorithm), and RC4 is a stream cipher.",
    category: "Cryptography",
    source: "Haramaya University Mock Exam"
  },
  {
    id: "sec_q10",
    number: 10,
    text: "Which of the following functions typically needs to be implemented inside the Trusted Computing Base (TCB) for building a secure operating system?",
    options: [
      "Process context switch and reading a file from the disk",
      "Listening to music",
      "Get the GPS coordinates of a smartphone",
      "Running complex visual analytics applications"
    ],
    correctAnswer: "A",
    explanation: "The Trusted Computing Base (TCB) includes core system mechanisms (hardware, firmware, software) essential for enforcing security policies. Low-level activities like process scheduling (context switching) and direct hardware reading must reside inside the TCB.",
    category: "System & OS Security",
    source: "AASTU Software Mock Exam II"
  },
  {
    id: "sec_q11",
    number: 11,
    text: "As a software developer, how would you incorporate secure coding practices into your software development process?",
    options: [
      "Use encryption for sensitive data",
      "Regularly update software libraries",
      "Perform code reviews for security vulnerabilities",
      "All of the above"
    ],
    correctAnswer: "D",
    explanation: "Robust software security relies on defense-in-depth, incorporating safe encryption protocols, active vulnerability patching, and peer security code reviews throughout the SDLC.",
    category: "Application Security",
    source: "AASTU Software Mock Exam II"
  },
  {
    id: "sec_q12",
    number: 12,
    text: "Compare and contrast software security with broader cybersecurity. What are the key differences between the two?",
    options: [
      "Cybersecurity encompasses protection for networks, systems, and programs, while software security focuses on securing individual programs.",
      "Neither A nor B.",
      "Software security handles outer firewalls, while cybersecurity regulates programming standards.",
      "They are identical terms and there are no domain separations."
    ],
    correctAnswer: "A",
    explanation: "Cybersecurity is an umbrella domain securing networks, users, and computing infrastructure. Software security specifically treats application-level risks, logic errors, and secure coding practices.",
    category: "Application Security",
    source: "AASTU Software Mock Exam II"
  },
  {
    id: "sec_q13",
    number: 13,
    text: "Define software security in a modular, secure design framework.",
    options: [
      "Securing information and system resources through software integrity",
      "Protecting software from viruses exclusively",
      "Ensuring software runs smoothly with zero downtime",
      "Enhancing the visual layout and response triggers for users"
    ],
    correctAnswer: "A",
    explanation: "Software Security is the proactive protection of software assets, database records, and system resources through resilience to unauthorized code modification and exploit attempts.",
    category: "Application Security",
    source: "AASTU Software Mock Exam II"
  },
  {
    id: "sec_q14",
    number: 14,
    text: "In GSM security, what role does the Equipment Identity Register (EIR) play?",
    options: [
      "Managing network bandwidth resources",
      "Identifying stolen or unauthorized mobile devices",
      "Authenticating mobile subscriber identity card numbers",
      "Storing active subscription profiles"
    ],
    correctAnswer: "B",
    explanation: "The EIR is a central GSM database that tracks mobile hardware identity numbers (IMEA/IMEI) in 'white', 'gray', or 'black' lists to block stolen, unauthorized, or faulty devices from network access.",
    category: "Network Security",
    source: "AASTU Software Mock Exam II"
  },
  {
    id: "sec_q15",
    number: 15,
    text: "Suppose a company experiences a data breach. What are the potential consequences for the organization to analyze?",
    options: [
      "Financial losses stemming from legal fees and civil compensations",
      "Severe reputation damage leading to massive customer attrition",
      "Substantial regulatory fines for non-compliance with data privacy mandates",
      "All of the above"
    ],
    correctAnswer: "D",
    explanation: "Security failures carry cascading penalties including immediate cleanup costs, brand destruction, litigations, and major regulatory fines (like GDPR or HIPAA penalties).",
    category: "System & OS Security",
    source: "AASTU Software Mock Exam II"
  },
  {
    id: "sec_q16",
    number: 16,
    text: "What is the fundamental purpose of information security?",
    options: [
      "To improve overall network throughput speed",
      "To design highly reactive user interfaces",
      "To prevent unauthorized access to data",
      "To monitor program development schedules"
    ],
    correctAnswer: "C",
    explanation: "The central objective of Information Security is guaranteeing the confidentiality, integrity, and availability (CIA triad) of information by defending it from unauthorized access, modification, or destruction.",
    category: "Access Control & Authentication",
    source: "AASTU Software Mock Exam II"
  },
  {
    id: "sec_q17",
    number: 17,
    text: "Which GSM security feature is responsible for ensuring the confidentiality of user data during transmission?",
    options: [
      "Ciphering",
      "Authentication",
      "Key management",
      "Registration"
    ],
    correctAnswer: "A",
    explanation: "Ciphering represents symmetric encryption applied over-the-air between the mobile station (MS) and base transceiver station (BTS), preventing active wireless eavesdropping of voice and transaction packets.",
    category: "Network Security",
    source: "AASTU Software Mock Exam II"
  },
  {
    id: "sec_q18",
    number: 18,
    text: "The process of recovering the original message without detailed knowledge of the secret information (decryption key) is called:",
    options: [
      "Decryption",
      "Deciphering",
      "Cryptanalysis",
      "Hash verification"
    ],
    correctAnswer: "C",
    explanation: "Cryptanalysis is the scientific study of reversing, deciphering, or cracking cipher systems, ciphertext, or keys without prior authorization or key possession.",
    category: "Cryptography",
    source: "General Security Prep Sheet"
  },
  {
    id: "sec_q19",
    number: 19,
    text: "Which of the following statements is true about crackers?",
    options: [
      "They attempt to break the system without permissions",
      "They are legally employed to break into systems for safety",
      "They always disclose security patches to developers prior to exploitation",
      "They are exclusively database management staff"
    ],
    correctAnswer: "A",
    explanation: "Crackers (or black-hat hackers) bypass security controls and enter systems unauthorized with malicious, fraudulent, or destructive intent.",
    category: "Network Security",
    source: "General Security Prep Sheet"
  },
  {
    id: "sec_q20",
    number: 20,
    text: "Which type of firewall can filter incoming and outgoing packets based on port numbers, protocols, and the active session state of the traffic?",
    options: [
      "Packet Filtering",
      "Proxy Service",
      "Stateful Inspection",
      "Threat-Focused Next-Generation Firewall (NGFW)"
    ],
    correctAnswer: "C",
    explanation: "Stateful Inspection firewalls keep track of open TCP/UDP sessions, ensuring packets are evaluated not just in isolation, but strictly in the context of active connection states.",
    category: "Network Security",
    source: "General Security Prep Sheet"
  },
  {
    id: "sec_q21",
    number: 21,
    text: "What will be the encrypted message if the message 'ATTACK' is encrypted by Caesar's cipher with key = 25?",
    options: [
      "ZSSZBJ",
      "ZGGZXP",
      "ZTTZAK",
      "BGGBDL"
    ],
    correctAnswer: "A",
    explanation: "In Caesar's cipher, a key of 25 shifting forward is identical to shifting backward by 1 character (since alphabet has 26 letters). Consequently: A->Z, T->S, T->S, A->Z, C->B, K->J. Reconstructed: ZSSZBJ.",
    category: "Cryptography",
    source: "General Security Prep Sheet"
  },
  {
    id: "sec_q22",
    number: 22,
    text: "All are properties of a substitution cipher EXCEPT:",
    options: [
      "The identity of letters is changed in the encryption process",
      "The position of letters is changed in the encryption process",
      "It uses the same key for the encryption and decryption processes",
      "It has a secure key distribution problem"
    ],
    correctAnswer: "B",
    explanation: "Changing the position of letters is a transposition cipher property. Substitution ciphers replace elements of plaintext with other symbols, changing their identity.",
    category: "Cryptography",
    source: "General Security Prep Sheet"
  },
  {
    id: "sec_q23",
    number: 23,
    text: "All are properties of the integrity goal of a computer system EXCEPT:",
    options: [
      "Ensures there was an authorized modification",
      "Keep resources safe from active attacks",
      "Integrity can be compromised by Deception",
      "Integrity can be compromised by Disclosure"
    ],
    correctAnswer: "D",
    explanation: "Information disclosure violates Confidentiality. Integrity concerns correctness and alteration protections, which are degraded by deception or unauthorized data modifications.",
    category: "Access Control & Authentication",
    source: "General Security Prep Sheet"
  },
  {
    id: "sec_q24",
    number: 24,
    text: "Which of the following statements about encryption is TRUE?",
    options: [
      "One-time pad cipher is highly secure than Vigenere cipher",
      "Symmetric key cryptography has a slower encryption process than asymmetric key encryption technique",
      "Hill-cipher can be easily broken by a basic brute force key search",
      "Asymmetric ciphers rely on sharing a single pre-shared secret key"
    ],
    correctAnswer: "A",
    explanation: "A One-Time Pad cipher is mathematically unbreakable when used with a truly random, non-repeating key that is as long as the plaintext itself (information-theoretic security).",
    category: "Cryptography",
    source: "General Security Prep Sheet"
  },
  {
    id: "sec_q25",
    number: 25,
    text: "Suppose you have received a message from your friend but the message is scrambled for the sake of security. Your friend has used a program to encode messages into scrambled text. In order to read the message, which software or program would you use?",
    options: [
      "Secret key",
      "Decryption program",
      "Encryption program",
      "Ciphertext builder"
    ],
    correctAnswer: "B",
    explanation: "To convert ciphertext (scrambled text) back to plaintext, a decryption program is loaded and executed using the appropriate decryption key.",
    category: "Cryptography",
    source: "MOEE Computer Science Exam"
  },
  {
    id: "sec_q26",
    number: 26,
    text: "Which of the following is a measure taken to ensure information and information systems' availability, integrity, authentication, and confidentiality?",
    options: [
      "Wiretapping",
      "Interception",
      "Information security",
      "Information assurance"
    ],
    correctAnswer: "C",
    explanation: "Information Security is the set of practices and countermeasures engineered to protect the secrecy, accessibility, correct modification, and verification of systems.",
    category: "System & OS Security",
    source: "MOEE Computer Science Exam"
  },
  {
    id: "sec_q27",
    number: 27,
    text: "Which of the following is a security service enforced to protect against presentation or disclosure of information, whether stored in a file or being on transmission, to unauthorized entities?",
    options: [
      "Authentication",
      "Integrity",
      "Availability",
      "Confidentiality"
    ],
    correctAnswer: "D",
    explanation: "Confidentiality is the fundamental security service designed to ensure that data remains inaccessible to all unprivileged individuals.",
    category: "System & OS Security",
    source: "MOEE Computer Science Exam"
  },
  {
    id: "sec_q28",
    number: 28,
    text: "Which of the following computers is most secure compared to the rest?",
    options: [
      "A computer connected to the Internet with the latest anti-virus installed on it",
      "A computer connected to the Internet with the latest firewall system",
      "A computer connected to the Internet having strong intrusion detection",
      "A computer that is completely disconnected from the Internet"
    ],
    correctAnswer: "D",
    explanation: "An air-gapped system (one with zero network interfaces) cannot be targeted by net-based remote attacks, representing maximum absolute security from outer network compromise.",
    category: "Network Security",
    source: "MOEE Computer Science Exam"
  },
  {
    id: "sec_q29",
    number: 29,
    text: "Which of the following represents a method of obtaining the meaning of encrypted information without authorized access to the secret key?",
    options: [
      "Encryption",
      "Decryption",
      "Crypto-analysis",
      "Cryptography"
    ],
    correctAnswer: "C",
    explanation: "Crypto-analysis (or cryptanalysis) is the study of breaking codes, decrypting messages, or finding keys without having authorization or the pre-shared key.",
    category: "Cryptography",
    source: "MOEE Computer Science Exam"
  },
  {
    id: "sec_q30",
    number: 30,
    text: "Which of the following elements is responsible for separating some machines from the rest of the network to shield them from possible attacks?",
    options: [
      "Firewall",
      "Router",
      "Network operating system",
      "Switch"
    ],
    correctAnswer: "A",
    explanation: "Firewalls enforce access control boundaries, isolating networks or hosts from unsecure environments to prevent malicious payloads or unauthorized requests.",
    category: "Network Security",
    source: "MOEE Computer Science Exam"
  },
  {
    id: "sec_q31",
    number: 31,
    text: "Database threats that are related to unauthorized disclosure of sensitive records are called:",
    options: [
      "Loss of integrity",
      "Loss of availability",
      "Loss of confidentiality",
      "None of the mentioned"
    ],
    correctAnswer: "C",
    explanation: "Confidentiality refers to keeping sensitive records secret. A threat that exposes secret data database parameters to unprivileged accounts results in a loss of confidentiality.",
    category: "System & OS Security",
    source: "Bahirdar University Model Mock"
  },
  {
    id: "sec_q32",
    number: 32,
    text: "Cryptography intercepts which type of data accessibility?",
    options: [
      "Authorized accessibility",
      "Unauthorized accessibility",
      "Legitimate accessibility",
      "All of the above"
    ],
    correctAnswer: "B",
    explanation: "The primary design criterion for cryptographic systems is preventing unauthorized accessibility of data, transforming plaintext to ciphertext.",
    category: "Cryptography",
    source: "Bahirdar University Model Mock"
  },
  {
    id: "sec_q33",
    number: 33,
    text: "Which of the following algorithms has overcome Triple DES (3DES) as the primary global symmetric key standard?",
    options: [
      "AES",
      "BLOW FISH",
      "DSA",
      "All of the above"
    ],
    correctAnswer: "A",
    explanation: "AES (Advanced Encryption Standard) was selected by NIST to replace Triple DES because it offers superior encryption speed, stronger key sizes, and high algorithmic efficiency.",
    category: "Cryptography",
    source: "Bahirdar University Model Mock"
  },
  {
    id: "sec_q34",
    number: 34,
    text: "Which of the following data security principles does a checksum or cryptographic hash verify?",
    options: [
      "INTEGRITY",
      "AUTHENTICITY",
      "CONFIDENTIALITY",
      "REPUDENTIALITY"
    ],
    correctAnswer: "A",
    explanation: "Checksums and hash values (like MD5 or SHA-256) verify Integrity. If even one bit of the data is altered during transmission, the resulting checksum collapses, alerting the receiver.",
    category: "Access Control & Authentication",
    source: "Bahirdar University Model Mock"
  },
  {
    id: "sec_q35",
    number: 35,
    text: "Which protocol uses port 443 and operates at Layer 7 (the Application layer)?",
    options: [
      "HTTPS",
      "SNMP",
      "FTP",
      "SSH"
    ],
    correctAnswer: "A",
    explanation: "HTTPS (Hypertext Transfer Protocol Secure) operates over TCP port 443 at Layer 7 of the OSI model, utilizing TLS/SSL for secure web transport.",
    category: "Network Security",
    source: "Jimma University Exit Mock Exam"
  },
  {
    id: "sec_q36",
    number: 36,
    text: "Sara is a database manager. She is allowed to add new users to the database, remove current users, and create usage permissions. However, she is not allowed to read the data inside the fields of the database tables themselves. This is an example of:",
    options: [
      "Role Based Access Control",
      "Discretionary Access Control",
      "Mandatory Access Control",
      "Behavior Based Access Control"
    ],
    correctAnswer: "A",
    explanation: "Role-Based Access Control (RBAC) grants system permissions based strictly on a user's defined job role (e.g., DBA manager) rather than individual identity, separating structural administrative rights from standard data ingestion.",
    category: "Access Control & Authentication",
    source: "Jimma University Exit Mock Exam"
  },
  {
    id: "sec_q37",
    number: 37,
    text: "Chala is a security practitioner tasked with ensuring that the information on the organization's public website is not changed by anyone outside the organization. This task is an example of ensuring ________.",
    options: [
      "Confidentiality",
      "Availability",
      "Authentication",
      "Integrity"
    ],
    correctAnswer: "D",
    explanation: "Integrity is the protection against unauthorized modifications, deletion, or defacement of information, ensuring its accuracy and completeness.",
    category: "Access Control & Authentication",
    source: "Jimma University Exit Mock Exam"
  },
  {
    id: "sec_q38",
    number: 38,
    text: "Which of the following is an example of a \"Something you know\" authentication factor?",
    options: [
      "Finger Printing",
      "Password",
      "GPS Position",
      "ATM Card"
    ],
    correctAnswer: "B",
    explanation: "A password is a knowledge factor (something you know). Fingerprinting is inherence (something you are), and an ATM card is possession (something you have).",
    category: "Access Control & Authentication",
    source: "Jimma University Exit Mock Exam"
  },
  {
    id: "sec_q39",
    number: 39,
    text: "Bereket needs to send an email to his supervisor with an attachment that includes sensitive business records. He wants to maintain the absolute confidentiality of this information. Which of the following is the BEST choice to meet his needs?",
    options: [
      "Hashing",
      "Data masking",
      "Encryption",
      "Digital signature"
    ],
    correctAnswer: "C",
    explanation: "Encryption transforms readable plaintext into scrambled ciphertext, guaranteeing the absolute confidentiality of the file in case of delivery leakage or transit interception.",
    category: "Cryptography",
    source: "Jimma University Exit Mock Exam"
  },
  {
    id: "sec_q40",
    number: 40,
    text: "Your organization hired a cybersecurity expert to perform a vulnerability scan. After running a scan on a web server, she sees a warning that Apache httpd is vulnerable to a mod_auth exploit. However, she verifies that the mod_auth module has never been installed or enabled on the server. Which of the following BEST explains this scenario?",
    options: [
      "A false negative",
      "The result of an authenticated credentialed scan",
      "The result of an unauthenticated external scan",
      "A false positive"
    ],
    correctAnswer: "D",
    explanation: "A false positive occurs when an automated security tool incorrectly flags a vulnerability that is not actually present or active on the scanned target.",
    category: "Application Security",
    source: "Jimma University Exit Mock Exam"
  },
  {
    id: "sec_q41",
    number: 41,
    text: "You are comparing different types of authentication systems. Which of the following choices represents multi-factor authentication (MFA)?",
    options: [
      "A system that checks an employee's fingerprint and performs a vein scan",
      "A system that requires users to have a physical smart card and enter a matching PIN",
      "A cipher door lock that requires employees to enter a numeric password to open the door",
      "A standard system requiring a username and a complex password"
    ],
    correctAnswer: "B",
    explanation: "MFA requires factors from two or more distinct categories. Possessing a physical smart card (something you have) combined with entering a PIN (something you know) satisfies this condition.",
    category: "Access Control & Authentication",
    source: "Jimma University Exit Mock Exam"
  },
  {
    id: "sec_q42",
    number: 42,
    text: "A company experiences a data breach where customer information is leaked. What is the immediate first priority for the Software security infrastructure team?",
    options: [
      "Force a complete update of all employee passwords",
      "Notify all customers about the breach immediately",
      "Deploy newly updated data encryption protocols across storage systems",
      "Identify the source of the breach and isolate the threat to contain it"
    ],
    correctAnswer: "D",
    explanation: "In security incident response, containment (isolating infected machines or patching the open leak) is the first action to stop active damage before secondary steps like user notification are launched.",
    category: "System & OS Security",
    source: "Online Exam Portal Output"
  },
  {
    id: "sec_q43",
    number: 43,
    text: "Security estimation and vulnerability assessment is an essential component of which software engineering process?",
    options: [
      "Software visual design",
      "Software active compilation",
      "Software SRS document assembly",
      "Security Risk management"
    ],
    correctAnswer: "D",
    explanation: "Protecting systems requires evaluating threats and modeling vulnerabilities, both of which are core elements of professional security Risk Management.",
    category: "System & OS Security",
    source: "Online Exam Portal Output"
  },
  {
    id: "sec_q44",
    number: 44,
    text: "An employee at a financial institution receives an email appearing to come from the IT department, asking them to reset their password via a link. The webpage mimics the official company login. What should the employee do first?",
    options: [
      "Click the link and change the password immediately",
      "Report the suspicious phishing email to the IT security department",
      "Enter fake credentials to test whether the form is real",
      "Forward the email to coworkers to raise awareness"
    ],
    correctAnswer: "B",
    explanation: "Reporting suspicion of phishing to security professionals allows immediate investigation and containment, blocking malicious elements on filters protecting the rest of the company.",
    category: "Network Security",
    source: "Online Exam Portal Output"
  },
  {
    id: "sec_q45",
    number: 45,
    text: "Which of the following descriptions best defines a botnet?",
    options: [
      "A configuration management tool for scanning software bugs",
      "A secure storage framework for backing up databases",
      "A specialized network antivirus package",
      "A group of compromised computers infected with malware and controlled remotely by an attacker"
    ],
    correctAnswer: "D",
    explanation: "A Botnet matches 'robot network'—compromised systems (bots/zombies) under the control of an attacker (botmaster) to perform DDoS, crack passwords, or propagate spam.",
    category: "Network Security",
    source: "Online Exam Portal Output"
  },
  {
    id: "sec_q46",
    number: 46,
    text: "A database system enforces access permissions based on security clearances (e.g. Secret, Top Secret) matched against formal data labels/classifications. This database security mechanism is called:",
    options: [
      "Cryptography Control",
      "Role-Based Access Control (RBAC)",
      "Mandatory Access Control (MAC)",
      "Discretionary Access Control (DAC)"
    ],
    correctAnswer: "C",
    explanation: "Mandatory Access Control (MAC) restricts access strictly based on labels assigned to objects and clearances assigned to subjects. In MAC, individual data owners cannot alter these access permissions, unlike DAC.",
    category: "Access Control & Authentication",
    source: "Online Exam Portal Output"
  },
  {
    id: "sec_q47",
    number: 47,
    text: "During a security audit, a vulnerability scanner discovers that input fields on a web application search bar are highly vulnerable to SQL Injection attacks. What is the most robust way to mitigate this security risk?",
    options: [
      "Restrict database access exclusively to administrative accounts",
      "Implement server-side input validation and parameterization (prepared statements) for SQL queries",
      "Ensure a robust perimeter network firewall is active",
      "Utilize security hashing across all user logs"
    ],
    correctAnswer: "B",
    explanation: "Query parameterization (prepared statements) forces the database driver to treat user inputs strictly as parameters, never as executable code. This completely stops SQL injection attacks, regardless of the input characters.",
    category: "Application Security",
    source: "Online Exam Portal Output"
  },
  {
    id: "sec_q48",
    number: 48,
    text: "What is the main security risk of using innerHTML with user-generated content in web sites?",
    options: [
      "Poor browser performance",
      "Cross-site scripting (XSS)",
      "Unexpected server-side memory leaks",
      "Browser engine incompatibility"
    ],
    correctAnswer: "B",
    explanation: "Using innerHTML directly renders raw HTML elements. If user-generated content contains malicious <script> vectors, they will execute in the browser session of other visitors, leading to Cross-Site Scripting (XSS).",
    category: "Application Security",
    source: "Model Exit Exam II"
  },
  {
    id: "sec_q49",
    number: 49,
    text: "What is a zero-day vulnerability in cybersecurity?",
    options: [
      "A publicly disclosed bug that has already been fully patched by the vendor",
      "A security bug that is only exploitable by inside system admins",
      "An older version bug that still exists in outdated legacy machines",
      "An active vulnerability exploited in the wild before a security patch is available"
    ],
    correctAnswer: "D",
    explanation: "A zero-day threat refers to a security vulnerability that is actively exploited by hackers before developers have had zero days of notice to write, test, and release a corresponding software patch.",
    category: "System & OS Security",
    source: "Model Exit Exam II"
  },
  {
    id: "sec_q50",
    number: 50,
    text: "Which of the following is a primary defense mechanism against buffer overflow attacks?",
    options: [
      "Stack canaries",
      "Web Application Firewalls",
      "Virtual sandboxes",
      "Traditional host antiviruses"
    ],
    correctAnswer: "A",
    explanation: "Stack canaries are integrity security integers placed in memory before the return pointer. If a buffer overflow occurs, this canary value is corrupted, and the OS aborts execution before hijack instructions can run.",
    category: "System & OS Security",
    source: "Model Exit Exam II"
  },
  {
    id: "sec_q51",
    number: 51,
    text: "What is the primary purpose of input validation in secure coding?",
    options: [
      "To compress network payloads for faster transport",
      "To assign database triggers to clean table spaces",
      "To check user input for malicious data that could exploit potential vulnerabilities",
      "To ensure full multi-platform operating system compatibility"
    ],
    correctAnswer: "C",
    explanation: "Input validation ensures that an application only accepts input conformant to strict patterns (data type, range, length), preventing bad actors from injecting scripts, commands, or database payloads.",
    category: "Application Security",
    source: "Model Exit Exam II"
  },
  {
    id: "sec_q52",
    number: 52,
    text: "Which class of vulnerability allows a remote attacker to execute arbitrary code directly on a target machine?",
    options: [
      "Cross-Site Request Forgery (CSRF)",
      "Cross-Site Scripting (XSS)",
      "Code injection",
      "Man-in-the-middle interception"
    ],
    correctAnswer: "C",
    explanation: "Code injection occurs when an application processes untrusted commands directly, enabling an attacker to specify custom input that overrides the application logic and forces execution of malicious instructions.",
    category: "Application Security",
    source: "Model Exit Exam II"
  },
  {
    id: "sec_q53",
    number: 53,
    text: "Which of the following is NOT considered a common user/system authentication method?",
    options: [
      "Multi-Factor Authentication (MFA)",
      "Biometric security scanning",
      "Time-Based One-Time Password (TOTP)",
      "Data obfuscation"
    ],
    correctAnswer: "D",
    explanation: "Data obfuscation makes code or data complex to inspect for intellectual property confidentiality. It is used for protection against reverse engineering, not for authenticating user identity claims.",
    category: "Access Control & Authentication",
    source: "Model Exit Exam II"
  },
  {
    id: "sec_q54",
    number: 54,
    text: "What is the default TCP ingress port utilized for secure HTTPS traffic?",
    options: [
      "Port 80",
      "Port 21",
      "Port 22",
      "Port 443"
    ],
    correctAnswer: "D",
    explanation: "HTTPS (Hypertext Transfer Protocol Secure) operates over secure TCP port 443 by default, utilizing TLS/SSL for encrypted web communications.",
    category: "Network Security",
    source: "Model Exit Exam II"
  },
  {
    id: "sec_q55",
    number: 55,
    text: "Which fundamental cyber security principle states that security mechanisms must be as small and simple as possible?",
    options: [
      "Fail-safe Defaults",
      "Least Privilege",
      "Economy of the Mechanism",
      "Open-Design Architecture"
    ],
    correctAnswer: "C",
    explanation: "Economy of Mechanism advises that security systems should be minimal, simple, and readable. Keeping designs compact limits the volume of potential bugs and code paths, making security validation vastly easier.",
    category: "System & OS Security",
    source: "AAiT Course Exit assessment"
  },
  {
    id: "sec_q56",
    number: 56,
    text: "Which security design principle is considered the direct opposite of 'Security through Obscurity'?",
    options: [
      "Least common mechanism",
      "Work factor",
      "Least privileges",
      "Open design"
    ],
    correctAnswer: "D",
    explanation: "Open Design (Kerckhoffs's principle) states that security must purely rely on secret key privacy, never on the obscurity or secrecy of the cryptographic algorithm or system layout.",
    category: "System & OS Security",
    source: "AAiT Course Exit assessment"
  },
  {
    id: "sec_q57",
    number: 57,
    text: "Which of the following is a network security protocol specifically designed to establish secure Virtual Private Network (VPN) tunnels?",
    options: [
      "SSL / Secure Sockets Layer",
      "SFTP",
      "IPsec",
      "FTP"
    ],
    correctAnswer: "C",
    explanation: "IPsec (Internet Protocol Security) is a robust framework of open standards that encrypts and authenticates packet headers to establish private, secure virtual tunnels across open public networks.",
    category: "Network Security",
    source: "AAiT Course Exit assessment"
  },
  {
    id: "sec_q58",
    number: 58,
    text: "During an audit, it is discovered that an organization's domain controllers were compromised through a clever phishing campaign. According to software engineering incident guides, what must be done next?",
    options: [
      "Conduct a full forensic investigation and assess organizational damage",
      "Erase all email server databases instantly",
      "Filter the records and hope the threat resolves automatically",
      "Force-reinstall Microsoft Windows across standard client desktops"
    ],
    correctAnswer: "A",
    explanation: "Incident response guidelines establish that immediately following active containment, security practitioners must conduct thorough forensic investigations to determine attack paths and evaluate organizational impact.",
    category: "Network Security",
    source: "Software Model Exit Exam"
  },
  {
    id: "sec_q59",
    number: 59,
    text: "In IPSec, which mode protects the entire IP packet (payload and header) by encapsulating it and placing the authentication header after a new outer IP header?",
    options: [
      "Transport Mode",
      "Secure Mode",
      "Tunnel Mode",
      "Bridge Mode"
    ],
    correctAnswer: "C",
    explanation: "Tunnel Mode encapsulates the entire original carriage packet inside a new virtual packet, shielding both the internal payload and original IP directories inside secure IPSec parameters.",
    category: "Network Security",
    source: "Software Model Exit Exam"
  },
  {
    id: "sec_q60",
    number: 60,
    text: "What is the primary objective of performing a comprehensive Threat Modeling session during software design?",
    options: [
      "To map the code to public cloud APIs",
      "To identify potential threats and security vulnerabilities in software beforehand",
      "To confirm execution times match CPU specifications",
      "To document class associations for public developer sites"
    ],
    correctAnswer: "B",
    explanation: "Threat modeling identifies architectural entry points, models threat behaviors, and implements corresponding mitigation boundaries proactively prior to operational systems deployment.",
    category: "Application Security",
    source: "Software Engineering Exit Exam"
  },
  {
    id: "sec_q61",
    number: 61,
    text: "Which of the following is the most robust definition of the primary goal of secure software operations?",
    options: [
      "To compile code into compact, executable binaries",
      "To make user interfaces responsive across multiple devices",
      "To prevent unauthorized access to systems and protect against hostile attacks",
      "To lower deployment and hardware hosting expenses"
    ],
    correctAnswer: "C",
    explanation: "Software Security exists to ensure system availability, protect client data confidentiality, and safeguard integrity against persistent external vectors.",
    category: "Application Security",
    source: "Software Engineering Exit Exam"
  },
  {
    id: "sec_q62",
    number: 62,
    text: "Which of the following describes an independent malicious program that propagates itself automatically across networks without requiring any host files or user stimulation?",
    options: [
      "Trojan Horse",
      "Computer Worm",
      "Logic Bomb",
      "File-Infector Virus"
    ],
    correctAnswer: "B",
    explanation: "A computer worm is a self-contained, independent malicious software program that can automatically replicate and distribute itself across computer networks without attaching to a host file.",
    category: "Network Security",
    source: "Software Engineering Exit Exam"
  },
  {
    id: "sec_q63",
    number: 63,
    text: "Which of the following is NOT a typical technique used for software requirements validation with business stakeholders?",
    options: [
      "Requirements walkthrough reviews",
      "Prototyping mock screen views",
      "Conducting customer focus groups",
      "Writing and executing local unit tests"
    ],
    correctAnswer: "D",
    explanation: "Unit testing verifies that individual components function correctly at compile/implementation time. It is an verification process, not a stakeholder validation method.",
    category: "Application Security",
    source: "Software Engineering Exit Exam"
  },
  {
    id: "sec_q64",
    number: 64,
    text: "In database design, the Boyce-Codd Normal Form (BCNF) requires that for every non-trivial functional dependency X -> Y:",
    options: [
      "No composite key structures exist",
      "Every determinant X must be a candidate key",
      "All non-prime attributes must be mutually independent",
      "The relational tables are restricted to 1NF parameters"
    ],
    correctAnswer: "B",
    explanation: "BCNF is a strict form of 3NF. Under BCNF constraints, every determinant X in functional dependencies X -> Y must be a candidate superkey, eliminating remaining anomalies.",
    category: "System & OS Security",
    source: "AASTU Normalization Assess"
  }
];

export const SOFTWARE_ENGINEERING_QUESTIONS: Question[] = [
  {
    id: "se_q1",
    number: 1,
    text: "In Agile Scrum, what does 'velocity' measure?",
    options: [
      "The absolute lines of code delivered per developer per sprint",
      "The exact number of critical security defects fixed",
      "The total amount of work completed in a sprint, typically represented in story points",
      "The execution speed of automatic testing integration servers"
    ],
    correctAnswer: "C",
    explanation: "Velocity represents the amount of product backlog work (usually measured in story points) that a Scrum development team successfully turns to 'Done' during a standard sprint.",
    category: "Software Processes",
    source: "Exit Assessment Reference"
  },
  {
    id: "se_q2",
    number: 2,
    text: "What is the primary purpose of traceability in requirements engineering?",
    options: [
      "To check whether the complete coding solution meets performance benchmarks",
      "To map and trace each requirement backward to its origin source and forward through design, implementation, and test cases",
      "To restrict unauthorized system administrators from editing the requirements draft",
      "To automatically compile visual prototype screenshots for stakeholder reviews"
    ],
    correctAnswer: "B",
    explanation: "Traceability maps requirements to designs, code modules, and tests, verifying that all requests are implemented and that every compiled feature traces back to a valid requirement.",
    category: "Requirements Engineering",
    source: "Requirements Engineering Syllabus"
  },
  {
    id: "se_q3",
    number: 3,
    text: "Which requirements elicitation technique involves direct, structured or unstructured interaction with individual end-users and stakeholders?",
    options: [
      "Requirements walkthrough reviews",
      "System prototyping",
      "Surveys and opinion polls",
      "Interviews"
    ],
    correctAnswer: "D",
    explanation: "Interviews involve direct personal engagement with stakeholders to explore their specific needs, operations, workflows, and concerns in detail.",
    category: "Requirements Engineering",
    source: "AAiT Course Exit assessment"
  },
  {
    id: "se_q4",
    number: 4,
    text: "What is the primary goal of refactoring software code?",
    options: [
      "To add brand-new user requested functionalities",
      "To optimize compilation times for low-power hardware",
      "To improve internal code quality and structure without altering outward external behavior",
      "To decrease licensing expenses of development IDEs"
    ],
    correctAnswer: "C",
    explanation: "Refactoring cleans and restructures existing software code (improving readability, reducing complexity, adding modularity) without changing what the code does from the user's perspective.",
    category: "Implementation & Maintenance",
    source: "Software Engineering Exit Exam"
  },
  {
    id: "se_q5",
    number: 5,
    text: "In the COCOMO software estimation model, what does the 'Organic' project mode typically indicate?",
    options: [
      "Large-scale systems with deeply complex parameters and strict interface rules",
      "Small-to-medium-sized projects handled by small, experienced teams with flexible requirements",
      "Critical embedded systems with direct hardware interface constraints",
      "Cloud systems scaling automatically via machine learning configurations"
    ],
    correctAnswer: "B",
    explanation: "Organic projects are relatively small, straightforward tasks where teams have prior experience and work under flexible constraints, making estimations highly reliable.",
    category: "Project Management & Cost",
    source: "COCOMO Study Guide"
  },
  {
    id: "se_q6",
    number: 6,
    text: "In Earned Value Management (EVM), what does a Cost Performance Index (CPI) of 1.15 represent?",
    options: [
      "The project is 15% behind scheduled timeline parameters",
      "The project is 15% over its assigned budget",
      "The project is performing under budget, delivering 1.15 of value for every dollar spent",
      "The project has resolved 15% more bugs than estimated"
    ],
    correctAnswer: "C",
    explanation: "CPI = Earned Value / Actual Cost. A value greater than 1.0 (like 1.15) indicates that the project is running under budget, showing excellent financial efficiency.",
    category: "Project Management & Cost",
    source: "EVM Guidelines"
  },
  {
    id: "se_q7",
    number: 7,
    text: "Which software testing level focuses on evaluating the complete system's compliance with specified technical and business specifications?",
    options: [
      "Unit testing",
      "Integration testing",
      "System testing",
      "User Acceptance testing"
    ],
    correctAnswer: "C",
    explanation: "System testing operates over the compiled, fully integrated application to verify that it completely satisfies the system requirements as documented in the SRS.",
    category: "Software Testing",
    source: "ASTU testing model"
  },
  {
    id: "se_q8",
    number: 8,
    text: "What represents the main architectural benefit of a Microservices pattern compared to a monolithic structure?",
    options: [
      "Simple deployments needing zero cluster configuration",
      "Independent scalability, deployment, and localized maintenance of each distinct service benefit",
      "Absolute elimination of database redundancy and consistency problems",
      "Zero overall network latency between system components"
    ],
    correctAnswer: "B",
    explanation: "Microservices split the system into fine-grained, self-contained modules, enabling different services to be scaled, upgraded, and maintained without impacting the entire ecosystem.",
    category: "Software Architecture",
    source: "Architectural Patterns Exit Exam"
  },
  {
    id: "se_q9",
    number: 9,
    text: "In Agile Scrum, who is primarily responsible and accountable for managing and prioritizing the Product Backlog?",
    options: [
      "The Scrum Master",
      "The Product Owner",
      "The lead Systems Architect",
      "The entire development team collectively"
    ],
    correctAnswer: "B",
    explanation: "The Product Owner is the single individual accountable for defining product requests, maintaining backlog items, and prioritizing tasks to optimize the value of the completed work.",
    category: "Software Processes",
    source: "Scrum Guide"
  },
  {
    id: "se_q10",
    number: 10,
    text: "Which test case design technique involves dividing input ranges into partitions that are expected to behave similarly, selecting one representative value from each?",
    options: [
      "Boundary Value Analysis",
      "Equivalence Partitioning",
      "Decision Table Testing",
      "Linear Path Execution"
    ],
    correctAnswer: "B",
    explanation: "Equivalence Partitioning divides input data of an application into classes of values that are expected to be processed similarly, drastically reducing the required test case volume.",
    category: "Software Testing",
    source: "Software Engineering Exit Exam"
  },
  {
    id: "se_q11",
    number: 11,
    text: "Adaptive maintenance is defined as modifying software after delivery for what purpose?",
    options: [
      "To fix physical bugs and errors found in production",
      "To add optional user features that improve overall processing speed",
      "To keep the software usable and compatible within a changed operating environment or hardware platform",
      "To re-write system documents to match initial specifications"
    ],
    correctAnswer: "C",
    explanation: "Adaptive maintenance focuses on adjusting software to operate correctly in response to updates or shifts in its external environment, like fresh OS upgrades, compilers, or database migrations.",
    category: "Implementation & Maintenance",
    source: "IEEE Software Standards"
  },
  {
    id: "se_q12",
    number: 12,
    text: "What is 'technical debt' in software engineering?",
    options: [
      "Unpaid financial subscriptions for cloud computing environments",
      "The future cost of additional rework incurred because a quick, suboptimal coding solution was chosen to speed up delivery today",
      "Financial penalties stemming from licensing terms of database engines",
      "The hardware cost of maintaining deprecated testing machines"
    ],
    correctAnswer: "B",
    explanation: "Technical debt is the metaphorical cost of opting for a faster but less clean solution. Over time, this legacy overhead complicates development and requires refactoring to repay.",
    category: "Implementation & Maintenance",
    source: "Haramaya University SE Exit Guide"
  },
  {
    id: "se_q13",
    number: 13,
    text: "What does the software design rule 'Separation of Concerns' (SoC) advise developers to do?",
    options: [
      "To divide project tasks strictly so developers never coordinate in person",
      "To organize the software into discrete, modular components, each handling a single responsibility",
      "To keep database schemas hidden from frontend web interfaces",
      "To consolidate all program logic into a single class file to ease version control tracking"
    ],
    correctAnswer: "B",
    explanation: "Separation of Concerns divides the software into clean modules where each treats a specific task, maximizing code understandability, testability, and ongoing maintainability.",
    category: "Software Architecture",
    source: "AASTU Architecture Syllabus"
  },
  {
    id: "se_q14",
    number: 14,
    text: "Which of the following methodologies emphasizes practices like Test-Driven Development (TDD), Pair Programming, and continuous customer feedback loops?",
    options: [
      "Sequential Waterfall Development",
      "Rational Unified Process",
      "Extreme Programming (XP)",
      "Cleanroom Software Engineering"
    ],
    correctAnswer: "C",
    explanation: "Extreme Programming (XP) is a technical agile framework centered on delivering quality software iteratively, relying heavily on Pair Programming, TDD, and Continuous Integration.",
    category: "Software Processes",
    source: "Agile Prep Sheet"
  },
  {
    id: "se_q15",
    number: 15,
    text: "What is said about the coupling between two modules if they communicate by passing an entire composite record structure, even if only a few fields are actually processed?",
    options: [
      "Control Coupling",
      "Common Coupling",
      "Stamp Coupling",
      "Data Coupling"
    ],
    correctAnswer: "C",
    explanation: "Stamp coupling occurs when a structured aggregate data object is passed between modules. The receiving module becomes dependent on the internal definition of that complete structure.",
    category: "Software Architecture",
    source: "Software Design Exams"
  },
  {
    id: "se_q16",
    number: 16,
    text: "If an entry field accepts integer ages between 18 and 60, which set contains standard boundary test values under Boundary Value Analysis?",
    options: [
      "18, 40, 60",
      "17, 18, 60, 61",
      "19, 20, 58, 59",
      "17, 30, 45, 62"
    ],
    correctAnswer: "B",
    explanation: "Boundary Value Analysis selects inputs directly on and adjacent to partition edges. For an accepted span of [18, 60], the boundary values are 18 and 60 (valid) along with 17 and 61 (invalid).",
    category: "Software Testing",
    source: "Exit Assessment Reference"
  },
  {
    id: "se_q17",
    number: 17,
    text: "What is the primary objective of software prototyping during early requirements engineering phases?",
    options: [
      "To deliver a final optimized build to clients immediately to save budgets",
      "To construct a simplified working model that helps elicit user feedback and clarify ambiguous requirements",
      "To run load testing scenarios against relational databases in test environments",
      "To generate automated class models for system designers"
    ],
    correctAnswer: "B",
    explanation: "Prototyping provides a tangible visual model for stakeholders, making it easy to confirm workflows, surface implicit requirements, and resolve specification conflicts early.",
    category: "Requirements Engineering",
    source: "Requirements Engineering Syllabus"
  },
  {
    id: "se_q18",
    number: 18,
    text: "Which of the following metrics determines the speed and accuracy with which a software system can recover operational status after experiencing a severe crash?",
    options: [
      "Scalability parameters",
      "Product Maintainability",
      "System Resilience / Recoverability",
      "Interface Usability metrics"
    ],
    correctAnswer: "C",
    explanation: "Recoverability (as part of Reliability) evaluates how efficiently an application can restore data states, re-establish secure connections, and resume standard workloads after an unexpected failure.",
    category: "Requirements Engineering",
    source: "AAiT Course Exit assessment"
  },
  {
    id: "se_q19",
    number: 19,
    text: "During Integration testing, Module A cannot correctly exchange parameter values with Module B. What is the most immediate solution?",
    options: [
      "Re-compile the entire application code on a separate server",
      "Check and update the interface contracts, boundary types, and call parameters between the modules",
      "Change the testing scope to bypass checking those modules",
      "Run database table check scripts"
    ],
    correctAnswer: "B",
    explanation: "Integration errors are typically caused by mismatched interface assumptions (argument count, type definitions, or sequence ordering). Aligning and correcting interface boundaries is the standard cure.",
    category: "Software Testing",
    source: "ASTU testing model"
  },
  {
    id: "se_q20",
    number: 20,
    text: "In software project management, what defines the 'Critical Path' in a project network diagram?",
    options: [
      "The shortest path representing the fastest execution times with maximum personnel",
      "The longest continuous sequence of dependent tasks that determines the absolute minimum duration of the project",
      "The path with the highest density of potential bug risks",
      "The design path documenting how physical security parameters are managed"
    ],
    correctAnswer: "B",
    explanation: "The critical path is the longest sequence of tasks from project start to finish. Tasks on this path have zero float (slack); if any task on the critical path is delayed, the complete project end-date is pushed.",
    category: "Project Management & Cost",
    source: "Project Management Syllabus"
  },
  {
    id: "se_q21",
    number: 21,
    text: "Why is it important to maintain a good relationship between software testers and developers?",
    options: [
      "To ensure that the project is completed on time",
      "To foster collaboration and communication between the two teams",
      "To make sure that the software is defect-free",
      "To reduce the cost of the project"
    ],
    correctAnswer: "B",
    explanation: "A collaborative relationship between testers and developers ensures smooth communication of defects, promotes positive feedback, and prevents conflicts, improving the overall software development quality.",
    category: "Software Processes",
    source: "Mock Exit Exam"
  },
  {
    id: "se_q22",
    number: 22,
    text: "Which of the following is NOT desired in a good software requirement specification (SRS) document?",
    options: [
      "Functional requirements specifications",
      "Goals of implementation",
      "Specific algorithms for software implementation",
      "Non-functional requirements specifications"
    ],
    correctAnswer: "C",
    explanation: "An SRS should detail 'what' the system should do, rather than 'how' it should do it. Specifying specific implementation algorithms restricts the architectural choices of developers unnecessarily.",
    category: "Requirements Engineering",
    source: "Software Engineering Principles"
  },
  {
    id: "se_q23",
    number: 23,
    text: "Which is the most critical and prominent feature of the Spiral software process model?",
    options: [
      "Performance management and metrics",
      "Efficiency and compilation management",
      "Risk analysis and management in every loop",
      "Visual prototyping and interface markup"
    ],
    correctAnswer: "C",
    explanation: "The Spiral model is a risk-driven process model. Each iteration or loop is built around a comprehensive risk analysis phase to identify, mitigate, and resolve project uncertainties early in the cycle.",
    category: "Software Processes",
    source: "Software Engineering Exit Exam"
  },
  {
    id: "se_q24",
    number: 24,
    text: "If every single requirement stated in the SRS can be checked by an realistic and cost-effective process, then the SRS is described as:",
    options: [
      "Traceable",
      "Verifiable",
      "Complete",
      "Modifiable"
    ],
    correctAnswer: "B",
    explanation: "A requirement is verifiable if and only if there exists a cost-effective, realistic process by which a person or machine can check that the final software meets that specific requirement.",
    category: "Requirements Engineering",
    source: "IEEE SRS Guidelines"
  },
  {
    id: "se_q25",
    number: 25,
    text: "In software project scheduling and management, a _______ is the lowest level of work identified on the project.",
    options: [
      "Work product",
      "Milestone",
      "Task set",
      "Task"
    ],
    correctAnswer: "D",
    explanation: "A task is the smallest, atomic unit of work specified in project management, representing a discrete component of a workflow assigned to an individual developer.",
    category: "Project Management & Cost",
    source: "Software Engineering Exit Exam"
  },
  {
    id: "se_q26",
    number: 26,
    text: "In Software Project Management, what does the 'PERT' estimation technique primarily stand for?",
    options: [
      "Program Evaluation and Review Technique",
      "Process Estimation and Resource Tracking",
      "Project Execution and Reliability Testing",
      "Product Efficiency and Resource Target"
    ],
    correctAnswer: "A",
    explanation: "PERT (Program Evaluation and Review Technique) is a statistical project management tool designed to analyze and estimate the time needed to complete tasks using optimistic, pessimistic, and most likely durations.",
    category: "Project Management & Cost",
    source: "Project Management Exit Exam"
  },
  {
    id: "se_q27",
    number: 27,
    text: "What does the term 'scope creep' refer to in project management?",
    options: [
      "The intentional expansion of project scope to meet stakeholder expectations",
      "The completion of project deliverables ahead of schedule",
      "The inability to define project scope clearly",
      "The unauthorized changes or continuous growth in project scope over time"
    ],
    correctAnswer: "D",
    explanation: "Scope creep refers to the uncontrolled, incremental expansion of project deliverables without adjusting resources, time, or budgets, usually caused by poor requirements change management.",
    category: "Project Management & Cost",
    source: "SWE Exit Exam"
  },
  {
    id: "se_q28",
    number: 28,
    text: "Which of the following is NOT a characteristic of high-quality software requirements?",
    options: [
      "Unambiguous and testable",
      "Subject to frequent arbitrary changes",
      "Clear, trace-friendly, and concise",
      "Complete and consistent"
    ],
    correctAnswer: "B",
    explanation: "Good requirements should be stable and solid. Frequent arbitrary changes can cause scope creep, high rework costs, and communication breakdowns during implementation.",
    category: "Requirements Engineering",
    source: "Requirements Engineering Syllabus"
  },
  {
    id: "se_q29",
    number: 29,
    text: "In the Extreme Programming (XP) agile methodology, what practice is most heavily emphasized?",
    options: [
      "Heavy documentation-driven development",
      "Continuous integration, automated tests, and frequent releases",
      "Strict upfront design and immutable original requirements",
      "Extensive horizontal class structure plans"
    ],
    correctAnswer: "B",
    explanation: "Extreme Programming highly emphasizes tight feedback loops, pair programming, Continuous Integration (CI), automated test coverage (TDD), and frequent iterative release cycles.",
    category: "Software Processes",
    source: "Agile Development Guide"
  },
  {
    id: "se_q30",
    number: 30,
    text: "What is the primary purpose of software prototyping during the early SDLC phases?",
    options: [
      "To build a final, optimized production deliverable directly",
      "To create a quick, simplified model to gather early feedback from end-users and validate requirements",
      "To implement a test database scheme for database tuning",
      "To reduce software license costs of development tools"
    ],
    correctAnswer: "B",
    explanation: "Prototyping serves to build are-usable or throwaway model to demonstrate workflows visually to users, helping clarify requirements, elicit changes, and validate assumptions.",
    category: "Requirements Engineering",
    source: "Model Exit Exam"
  },
  {
    id: "se_q31",
    number: 31,
    text: "Which software development methodology emphasizes incremental, iterative development and highly flexible, self-organizing teams?",
    options: [
      "Waterfall model",
      "V-model",
      "Agile methodology",
      "Spiral model"
    ],
    correctAnswer: "C",
    explanation: "Agile methodologies promote iterative cycles, collaborative self-organizing teams, and continuous adaptation to changing environments compared to rigid sequential approaches like Waterfall.",
    category: "Software Processes",
    source: "SWE Mock Papers"
  },
  {
    id: "se_q32",
    number: 32,
    text: "Which of the following is NOT typically a standard challenge in requirements engineering?",
    options: [
      "Ambiguous or imprecise statements",
      "Conflicting non-functional requirements",
      "Frequent, undocumented parameter constraints",
      "Efficient translation of requirements directly into production source code"
    ],
    correctAnswer: "D",
    explanation: "Directly translating requirements to complete code is part of design and implementation phases rather than requirements engineering, which focuses purely on elicitation, specification, validation, and management.",
    category: "Requirements Engineering",
    source: "SWE Syllabus"
  },
  {
    id: "se_q33",
    number: 33,
    text: "Which term refers to the degree to which a software system meets its specified functional and non-functional requirements and remains free of critical defects?",
    options: [
      "Software architecture",
      "Software complexity",
      "Software maintenance",
      "Software quality"
    ],
    correctAnswer: "D",
    explanation: "Software quality represents conformability to functional requests, performance parameters, design standards, and correctness checks with minimum error counts.",
    category: "SWE Principles",
    source: "SWE Handbook"
  },
  {
    id: "se_q34",
    number: 34,
    text: "Under the COCOMO software cost estimation model, how is the initial nominal effort estimate (E) calculated?",
    options: [
      "E = a * (KLOC) * b",
      "E = a + b * (KLOC)",
      "E = a * (KLOC)^b",
      "E = b * (KLOC)^a"
    ],
    correctAnswer: "C",
    explanation: "The COCOMO equations calculate effort (E) in person-months as: E = a * (KLOC)^b, where 'a' and 'b' are coefficients determined by organic, semidetached, or embedded organic attributes.",
    category: "Project Management & Cost",
    source: "COCOMO Equations Sheet"
  },
  {
    id: "se_q35",
    number: 35,
    text: "In software testing, what describes a 'test oracle'?",
    options: [
      "An automated tool that generates synthetic test values",
      "A mechanism, reference, or criterion to determine whether a test case passed or failed",
      "An online bug reporting spreadsheet used by QA testers",
      "The database schema defining the mock test boundaries"
    ],
    correctAnswer: "B",
    explanation: "A test oracle acts as the baseline source of expected behaviors, comparing actual outputs against correct reference values to evaluate test results accurately.",
    category: "Software Testing",
    source: "Software Testing Standards"
  },
  {
    id: "se_q36",
    number: 36,
    text: "Which of the following is considered a primary risk associated with structural software component reuse?",
    options: [
      "Increased overall system implementation budgets",
      "Difficult integration, license conflicts, and version compatibility challenges",
      "Strict lack of object-oriented polymorphism functions",
      "Bypassing unit and systems test requirements automatically"
    ],
    correctAnswer: "B",
    explanation: "Reusing standard binary components introduces risks of version mismatch, licensing conflicts, lack of source modification access, and unexpected integration bugs in existing environments.",
    category: "Implementation & Maintenance",
    source: "Reusable Software Guide"
  },
  {
    id: "se_q37",
    number: 37,
    text: "Which software testing type verifies system behaviors and robustness under extreme conditions, such as peak transaction throughput or hardware constraints?",
    options: [
      "Stress testing",
      "Usability testing",
      "Unit testing",
      "Integration testing"
    ],
    correctAnswer: "A",
    explanation: "Stress testing deliberately pushes a system beyond normal operational capacities (peak memory, max concurrent users) to evaluate stability, failure thresholds, and recovery limits.",
    category: "Software Testing",
    source: "SWE Exit Exam"
  },
  {
    id: "se_q38",
    number: 38,
    text: "What represents the main, most effective benefit of conducting early testing in the software development lifecycle?",
    options: [
      "It adds additional requested features to code automatically",
      "It dramatically reduces the cost, time, and rework required to fix errors before they propagate",
      "It makes the software run faster on embedded local chipsets",
      "It eliminates the need for compiling technical documentations"
    ],
    correctAnswer: "B",
    explanation: "Bugs found during early design/requirements phases are extremely cheap to correct, whereas fixing errors propagated to production is highly expensive.",
    category: "Software Testing",
    source: "SWE Principles"
  },
  {
    id: "se_q39",
    number: 39,
    text: "How is Test Case Efficiency standardly calculated in software quality metrics?",
    options: [
      "(Total test cases / Number of defects) * 100",
      "(Total defects found / Total test cases executed) * 100",
      "(Passed test cases / Total defects) * 100",
      "(Defects closed / Total test cases) * 100"
    ],
    correctAnswer: "B",
    explanation: "Test case efficiency determines how effectively test executions identify defects. It evaluates the ratio of successful bug finds over the sum of run test parameters.",
    category: "Software Testing",
    source: "SWE Quality Standards"
  },
  {
    id: "se_q40",
    number: 40,
    text: "Which SDLC process model is least suitable when requirements are highly unstable and expected to change frequently after the design phase?",
    options: [
      "RAD model",
      "Agile Scrum model",
      "Sequential Waterfall model",
      "Prototype model"
    ],
    correctAnswer: "C",
    explanation: "The Waterfall model requires requirements to be fully frozen early on. It does not handle late-stage edits or feedback well, making modifications expensive.",
    category: "Software Processes",
    source: "Model Exit Exam"
  },
  {
    id: "se_q41",
    number: 41,
    text: "In Scrum Agile, how is the 'Product Backlog' defined?",
    options: [
      "An internal spreadsheet tracking daily team task divisions",
      "A prioritized, dynamic, and ordered list containing every feature, modification, threat, and fix needed for the product",
      "The list of code errors found during unit testing phases",
      "Refactoring rules logged by system architects"
    ],
    correctAnswer: "B",
    explanation: "The Product Backlog is the single source of work for a Scrum team, containing all features, fixes, and architectural revisions, managed and prioritized by the Product Owner.",
    category: "Software Processes",
    source: "SWE Principles"
  },
  {
    id: "se_q42",
    number: 42,
    text: "What defines the main objective of project scope management in software engineering?",
    options: [
      "To write clean UML and database schema tables",
      "To ensure that only required work is included, excluding unapproved additions, and preventing scope creep",
      "To optimize compile environments for hardware systems",
      "To maintain team velocity indices per sprint"
    ],
    correctAnswer: "B",
    explanation: "Scope management maps and monitors work deliverables, verifying that the project includes all work required (and only that work) to prevent unbounded features and delay risks (scope creep).",
    category: "Project Management & Cost",
    source: "Project Management guide"
  },
  {
    id: "se_q43",
    number: 43,
    text: "Which document details the project timeline, key delivery milestones, task dependencies, and resource allocations?",
    options: [
      "Risk database log",
      "System change request form",
      "Software Quality Assurance plan",
      "Project schedule / roadmap"
    ],
    correctAnswer: "D",
    explanation: "The project schedule outlines exactly when tasks occur, mapping dependencies and critical paths to make project timelines predictable.",
    category: "Project Management & Cost",
    source: "SWE Mock Papers"
  },
  {
    id: "se_q44",
    number: 44,
    text: "When compiling a feasibility study report for non-technical stakeholders, what aspect must be addressed with highest priority?",
    options: [
      "An evaluation of the system's contribution to high-level organizational and business objectives",
      "A detailed technical specification outlining memory usage and schema constraints",
      "Comprehensive lists of all low-level technical parameters",
      "A detailed trace log mapping test suites"
    ],
    correctAnswer: "A",
    explanation: "Non-technical stakeholders evaluate feasibility based on strategic contribution, cost-benefit analysis, ROI, and organizational value, requiring high-level business alignment.",
    category: "Requirements Engineering",
    source: "SWE Principles"
  },
  {
    id: "se_q45",
    number: 45,
    text: "Which of the following processes is responsible for establishing procedures for tracking, auditing, and managing changes to software builds and artifacts?",
    options: [
      "Configuration Management",
      "System Project Scheduling",
      "Vulnerability Audit scanning",
      "User Acceptance testing"
    ],
    correctAnswer: "A",
    explanation: "Configuration Management controls changes to baseline artifacts (code, schemas, documents, metrics), ensuring version control, trace tracking, and artifact consistencies are maintained over time.",
    category: "Implementation & Maintenance",
    source: "SWE Exit Exam"
  }
];


export const OOP_PROGRAMMING_QUESTIONS: Question[] = [
  {
    id: "oop_q1",
    number: 1,
    text: "In terms of memory allocation overhead, what is the primary disadvantage of choosing recursion over iteration?",
    options: [
      "Recursion runs under continuous register constraints preventing runtime execution",
      "Each recursive call adds a new stack frame to the call stack, increasing memory footprint and risking Stack Overflow errors",
      "Recursion completely bypasses CPU caching systems",
      "Recursive variables are automatically loaded into persistent heap structures"
    ],
    correctAnswer: "B",
    explanation: "Recursion utilizes the execution call stack. Each recursive step pushes a fresh frame containing return pointers and local variables. Excessive depth can exhaust this memory space, triggering stack overflows.",
    category: "Algorithm Complexity",
    source: "General Programming Study Sheet"
  },
  {
    id: "oop_q2",
    number: 2,
    text: "In C++ systems programming, what is a 'dangling pointer'?",
    options: [
      "A pointer variable that has never been assigned an initial address values",
      "A pointer that points to a memory location that has already been deallocated or freed",
      "A pointer that points to a protected operating system address",
      "A pointer pointing to a constant structural variable"
    ],
    correctAnswer: "B",
    explanation: "A dangling pointer occurs when the memory a pointer points to is deallocated (freed) while the pointer itself remains active. Accessing a dangling pointer causes undefined behavior, crashes, or security bugs.",
    category: "Memory Management",
    source: "C++ Memory Standards"
  },
  {
    id: "oop_q3",
    number: 3,
    text: "Which of the following statements is TRUE about pass-by-reference compared to pass-by-value argument passing?",
    options: [
      "Pass-by-reference creates a local duplicate of the argument's data to shield it",
      "Pass-by-reference operates directly on the memory address of the argument, letting functions modify the original variable",
      "Pass-by-reference is always slower since it has to write values to physical disk",
      "Pass-by-reference variables are automatically garbage-collected upon function returns"
    ],
    correctAnswer: "B",
    explanation: "In pass-by-reference, the function receives an alias or memory locator referencing the caller's actual variable. This avoids copy overhead for large structures and permits inplace modifications.",
    category: "Programming Mechanics",
    source: "General Programming Study Sheet"
  },
  {
    id: "oop_q4",
    number: 4,
    text: "In languages like Java, if a subclass constructor does not explicitly reference a superclass constructor, what does the compiler do?",
    options: [
      "It halts compilation, showing a missing reference error",
      "It implicitly inserts a call to the parent class's parameterless constructor: super()",
      "It instantiates the parent class as a null object",
      "It bypasses initializing parent variables to save RAM"
    ],
    correctAnswer: "B",
    explanation: "When a subclass constructor does not call super(...) explicitly, the Java compiler automatically prepends super() to execute the default/no-argument parent constructor before subclass rules run.",
    category: "OOP Concepts",
    source: "Java OOP Handbook"
  },
  {
    id: "oop_q5",
    number: 5,
    text: "Which OOP concept describes having multiple methods within the exact same class that share the same name but have different parameter arrays/types?",
    options: [
      "Method Overriding",
      "Method Overloading",
      "Operator Hiding",
      "Dynamic Polymorphism"
    ],
    correctAnswer: "B",
    explanation: "Method overloading is a compile-time (static) polymorphism feature enabling a class to define multiple methods with an identical name, differentiated purely by parameter signatures.",
    category: "OOP Concepts",
    source: "Haramaya OOP Exam"
  },
  {
    id: "oop_q6",
    number: 6,
    text: "Which of the following best defines the Liskov Substitution Principle (LSP) in SOLID design?",
    options: [
      "Subclasses must define all private parent methods as public",
      "Subclass objects should be completely replaceable for parent/superclass objects without altering program correctness",
      "No class should inherit from more than one parent base class",
      "Subclasses are restricted from adding any new custom methods"
    ],
    correctAnswer: "B",
    explanation: "LSP says that if S is a subtype of T, objects of type T should be replaceable by type S without breaking systems logic. It ensures that subclass behaviors remain compatible with parent definitions.",
    category: "OOP Concepts",
    source: "SOLID Design Guidelines"
  },
  {
    id: "oop_q7",
    number: 7,
    text: "In Python, which of the following is true regarding variable typing?",
    options: [
      "All variables are strictly bound to types at compilation and cannot change types",
      "Python is dynamically typed; variables are placeholders bound to object values, and can change types at runtime",
      "Python does not support standard objects or types",
      "Variable types must be declared using explicit structural brackets"
    ],
    correctAnswer: "B",
    explanation: "Python uses dynamic typing and duck typing. Types are checked at runtime, and variables are pointers pointing to values. A variable name can point to an integer, and later be assigned a string.",
    category: "Programming Mechanics",
    source: "General Programming Study Sheet"
  },
  {
    id: "oop_q8",
    number: 8,
    text: "What is the output of the following C++ arithmetic statement? \nint x = 5; \nstd::cout << (x++ + ++x) << std::endl;",
    options: [
      "10",
      "11",
      "12",
      "13"
    ],
    correctAnswer: "C",
    explanation: "The evaluation is compiler-dependent in older C++ but typically: x++ evaluates to 5, x increments to 6. Then, ++x increments x to 7 and evaluates to 7. Result: 5 + 7 = 12.",
    category: "Programming Mechanics",
    source: "C++ Operators Sheet"
  },
  {
    id: "oop_q9",
    number: 9,
    text: "What will the following Python sequence output?\na = [1, 2, 3]\nb = a\na.append(4)\nprint(b)",
    options: [
      "[1, 2, 3]",
      "[1, 2, 3, 4]",
      "SyntaxError: variable re-binding",
      "None"
    ],
    correctAnswer: "B",
    explanation: "In Python, variables are references to objects. 'b = a' makes both 'a' and 'b' point to the same list object in memory. Appending to 'a' alters the shared list, so 'b' reflects the changes.",
    category: "Programming Mechanics",
    source: "Python Pointer Study"
  },
  {
    id: "oop_q10",
    number: 10,
    text: "What is the purpose of the 'volatile' keyword in programming languages like C or Java?",
    options: [
      "To declare a variable as a constant global object",
      "To instruct the compiler to avoid optimization on this variable, ensuring all reads and writes go directly to system RAM",
      "To indicate that the variable is susceptible to security injection attacks",
      "To enforce compilation boundaries for recursive tasks"
    ],
    correctAnswer: "B",
    explanation: "Volatile warns the compiler that a variable's value can be changed by external hardware-interrupts or concurrent threads. The compiler skips caching it in CPU registers, forcing direct RAM fetches.",
    category: "Memory Management",
    source: "C systems programming"
  },
  {
    id: "oop_q11",
    number: 11,
    text: "Which of the following represents a typical symptom of a severe memory leak in a long-running system process?",
    options: [
      "An immediate crash upon launching with compilation errors",
      "A gradual, continuous degradation of system performance over time as available RAM is exhausted",
      "Database tables dropping columns unexpectedly",
      "Network packet transit speed multiplying"
    ],
    correctAnswer: "B",
    explanation: "Memory leaks occur when allocated memory blocks are not returned to the OS. Over hours or days, this orphan space aggregates, shrinking available system memory, leading to heavy paging and eventual out-of-memory crashes.",
    category: "Memory Management",
    source: "System Debugging Reference"
  },
  {
    id: "oop_q12",
    number: 12,
    text: "How do objects coordinate and communicate with each other in clean object-oriented programs?",
    options: [
      "By directly reading and writing each other's private data fields",
      "By writing shared logs inside system configuration files",
      "By calling helper methods on each other, routing message signals",
      "By routing local network pings to specific operating ports"
    ],
    correctAnswer: "C",
    explanation: "In OOP, communication occurs through 'message passing' — which means calling a standard class method on another object instance, ensuring encapsulation borders remain intact.",
    category: "OOP Concepts",
    source: "Jimma University OOP Guide"
  },
  {
    id: "oop_q13",
    number: 13,
    text: "Which sorting algorithm exhibits the worst performance (O(n^2)) in its worst-case scenario when poor pivot element choices are continuously made?",
    options: [
      "Merge Sort",
      "Heap Sort",
      "Quick Sort",
      "Radix Sort"
    ],
    correctAnswer: "C",
    explanation: "While Quick Sort averages O(n log n), selecting poor pivots (e.g., sorting pre-sorted arrays using the first index) forces highly unbalanced partitions, collapsing efficiency to worst-case quadratic O(n^2).",
    category: "Algorithm Complexity",
    source: "Data Structures & Algorithms Syllabus"
  },
  {
    id: "oop_q14",
    number: 14,
    text: "Which of the following statements about C++ dynamic memory allocation is TRUE?",
    options: [
      "The 'new' operator returns null or throws std::bad_alloc if system memory allocation fails",
      "Dynamically allocated variables on the heap are automatically cleaned up when scope ends",
      "Heap memory allocation is much faster than standard local stack allocations",
      "The delete instruction is optional when allocating arrays on heap"
    ],
    correctAnswer: "A",
    explanation: "'new' allocates memory dynamically on the heap. If there is insufficient RAM, it throws a std::bad_alloc exception (or returns nullptr when using 'nothrow'). Heap objects must be manually freed via delete.",
    category: "Memory Management",
    source: "C++ Memory Standards"
  },
  {
    id: "oop_q15",
    number: 15,
    text: "Which two features of object-oriented programming are conceptually centered on shielding state from outer modification and exposing only relevant operational details?",
    options: [
      "Dynamic Dispatching and Static Binding",
      "Method Overriding and Multi-Inheritance",
      "Encapsulation and Abstraction",
      "Compilation and Serialization"
    ],
    correctAnswer: "C",
    explanation: "Encapsulation bundles data and methods while hiding internal state details (via private scopes). Abstraction focuses on exposing a clean high-level interface, simplifying user logic.",
    category: "OOP Concepts",
    source: "General Programming Study Sheet"
  },
  {
    id: "oop_q16",
    number: 16,
    text: "What is the primary compilation error in the following C++ exception-handling try/catch code snippet?\ntry { \n  int x = -1; \n  if (x < 0) { throw x; } \n} catch (unsigned int e) { \n  std::cout << e; \n}",
    options: [
      "The throw statement must only throw string literals in C++",
      "The catch block is configured to catch the wrong type of exception (unsigned int instead of matching int)",
      "Throw is forbidden from throwing variables having negative values",
      "Catch statements are strictly restricted from printing variables on console"
    ],
    correctAnswer: "B",
    explanation: "C++ exception matching is strict and does not perform implicit type casting. An exception of type 'int' (the variable x) will bypass a catch block expecting an 'unsigned int', risking an unhandled exception crash.",
    category: "Programming Mechanics",
    source: "C++ Exceptions Guide"
  },
  {
    id: "oop_q17",
    number: 17,
    text: "Why is it robust to declare a virtual destructor in a C++ base class that has derived subclasses?",
    options: [
      "To double the deletion speed of heap variables",
      "To ensure the derived class destructor is called when deleting a subclass object through a base pointer, avoiding memory leaks",
      "To prevent subclass methods from overriding parent values",
      "To allocate the base class variables into stack space automatically"
    ],
    correctAnswer: "B",
    explanation: "If a base class destructor is non-virtual, deleting a derived class through a base pointer causes undefined behavior. Only the base constructor/destructor runs, leaving derived class heap elements orphaned (leaked).",
    category: "Memory Management",
    source: "C++ Memory Standards"
  },
  {
    id: "oop_q18",
    number: 18,
    text: "What is a key syntactic difference between a pointer and a reference variable in C++?",
    options: [
      "References can be reassigned to point to different storage addresses at any time",
      "References must be initialized immediately upon declaration and cannot be null, unlike pointers",
      "Pointers do not require dereferencing parameters to access values",
      "References occupy twice the system coordinate space of standard pointer addresses"
    ],
    correctAnswer: "B",
    explanation: "A pointer holds a memory level address and can be null or reassigned. A reference acts as an immutable alias to an existing object, meaning it must be initialized on declaration and cannot be null.",
    category: "Programming Mechanics",
    source: "C++ Memory Standards"
  },
  {
    id: "oop_q19",
    number: 19,
    text: "Which of the following classic sorting algorithms is considered unstable by default?",
    options: [
      "Merge Sort",
      "Insertion Sort",
      "Bubble Sort",
      "Heap Sort"
    ],
    correctAnswer: "D",
    explanation: "A sorting algorithm is stable if it preserves the relative order of equal keys. Heap Sort is unstable because tree swap operations can move equal elements past each other unpredictably.",
    category: "Algorithm Complexity",
    source: "Data Structures & Algorithms Syllabus"
  },
  {
    id: "oop_q20",
    number: 20,
    text: "In a binary search tree (BST), which of the following traversal paths will visit and output values in sorted, ascending order?",
    options: [
      "Pre-order Traversal",
      "In-order Traversal",
      "Post-order Traversal",
      "Breadth-first Level Traversal"
    ],
    correctAnswer: "B",
    explanation: "In-order traversal visits the left subtree, then the current node, then the right subtree. Because of BST ordering properties, this order matches ascending sorted value progression (Left < Root < Right).",
    category: "Data Structures",
    source: "Binary Search Trees Sheet"
  },
  {
    id: "oop_q21",
    number: 21,
    text: "Which of the following is not a fundamental control structure in structured programming paradigm architectures?",
    options: [
      "Sequence statement mapping",
      "Selection condition branches",
      "Recursion stacking functions",
      "Iteration loops"
    ],
    correctAnswer: "C",
    explanation: "Sequence, selection, and iteration are the three theoretically distinct control structures that form the basis of structured programming. Recursion is an execution technique rather than a standalone control layout.",
    category: "Programming Mechanics",
    source: "Mock Exit Exam II"
  },
  {
    id: "oop_q22",
    number: 22,
    text: "What will be the output of executing the following Java program block: int x = 5; System.out.println(x++ + ++x);",
    options: [
      "10",
      "11",
      "12",
      "13"
    ],
    correctAnswer: "C",
    explanation: "First, x++ evaluates to 5 (and increments x to 6). Next, ++x pre-increments x from 6 to 7, and evaluates to 7. Summing the two evaluated values yields: 5 + 7 = 12.",
    category: "Programming Mechanics",
    source: "General Programming Study Sheet"
  },
  {
    id: "oop_q23",
    number: 23,
    text: "Assuming worst-case performance limits, which sorting algorithm displays the worst worst-case time complexity, specifically when bad parameters occur?",
    options: [
      "Merge Sort",
      "Heap Sort",
      "Quick Sort (with poor pivot selection)",
      "Radix Sort"
    ],
    correctAnswer: "C",
    explanation: "Quick Sort degrades to O(n^2) worst-case time complexity if poor pivots (e.g. extremely unbalanced elements) are chosen recursively, whereas Merge and Heap sort maintain O(n log n) limits.",
    category: "Algorithm Complexity",
    source: "General Programming Study Sheet"
  },
  {
    id: "oop_q24",
    number: 24,
    text: "In the Python programming language, which of the following is true regarding variable typing?",
    options: [
      "Variables must be declared with a strict native static type before use",
      "Python uses static compiling and typing rules",
      "Python uses a fully dynamic typing engine",
      "Variables are restricted from changing types after initial values are bound"
    ],
    correctAnswer: "C",
    explanation: "Python is dynamically typed. Intercalated variables are bound at runtime rather than compiled. No type definitions are required, and parameters can represent different types dynamically.",
    category: "Programming Mechanics",
    source: "General Programming Study Sheet"
  },
  {
    id: "oop_q25",
    number: 25,
    text: "What is the expected output of the following Python slice interaction: a = [1, 2, 3]; b = a; a.append(4); print(b)",
    options: [
      "[1, 2, 3]",
      "[1, 2, 3, 4]",
      "Runtime Exception compiling error",
      "None / Null list state"
    ],
    correctAnswer: "B",
    explanation: "In Python, lists are mutable reference objects. Creating 'b = a' makes 'b' point to the exact same memory coordinate as 'a'. Appending values to 'a' modifies the referenced array, which is visible in 'b'.",
    category: "Programming Mechanics",
    source: "General Programming Study Sheet"
  },
  {
    id: "oop_q26",
    number: 26,
    text: "Under AVL self-balancing binary search tree constraints, what represent valid balance factors for any arbitrary node?",
    options: [
      "Always exactly 0",
      "Either -1, 0, or +1",
      "Any positive or negative integer depending on tree heights",
      "Positive integers representing left tree counts"
    ],
    correctAnswer: "B",
    explanation: "An AVL tree is balanced if, for every node, the height difference between Left and Right subtrees (balance factor) remains strictly restricted to -1, 0, or +1, triggering rebalancing rotations if violated.",
    category: "Data Structures",
    source: "General Programming Study Sheet"
  },
  {
    id: "oop_q27",
    number: 27,
    text: "Which of the following standard sorting algorithms is described as 'unstable' by default parameters?",
    options: [
      "Merge Sort",
      "Insertion Sort",
      "Bubble Sort",
      "Heap Sort"
    ],
    correctAnswer: "D",
    explanation: "A sorting algorithm is stable if it preserves the relative order of duplicate elements. Heap Sort is unstable by default due to tree swaps violating initial indices.",
    category: "Algorithm Complexity",
    source: "General Programming Study Sheet"
  },
  {
    id: "oop_q28",
    number: 28,
    text: "Which OOP concept describes the facility for declaring multiple methods with the exact same identifier in a class file, but different parameter count or types?",
    options: [
      "Method Overriding",
      "Method Overloading",
      "Method Encapsulation",
      "Dynamic Dispatching"
    ],
    correctAnswer: "B",
    explanation: "Method Overloading allow developers to offer multiple method rules with the exact same name but distinct parameter signatures, resolving calls at compile time.",
    category: "OOP Concepts",
    source: "General Programming Study Sheet"
  },
  {
    id: "oop_q29",
    number: 29,
    text: "In robust object-oriented system architectures, how should independent objects communicate and exchange operations with each other?",
    options: [
      "By using custom native memory offset pointers",
      "By accessing each other's target local variables directly",
      "By invoking defined methods or operations on each other",
      "By passing structured variables via global system files"
    ],
    correctAnswer: "C",
    explanation: "Encapsulation prevents direct data manipulation. Objects communicate solely by invoking methods on target interfaces, hiding internal variables securely.",
    category: "OOP Concepts",
    source: "SWE Mock Papers"
  },
  {
    id: "oop_q30",
    number: 30,
    text: "How do you move the coordinate file pointer safely to a specific location for reading or writing files in C++?",
    options: [
      "By invoking the relocate() methods over objects",
      "By using file.transfer() pointer values",
      "By using the file.move() operator parameters",
      "By invoking the seekg() and seekp() pointer member functions"
    ],
    correctAnswer: "D",
    explanation: "fstream uses seekg() (seek get) to position input reading pointers, and seekp() (seek put) to position output write pointers inside a file stream context.",
    category: "Programming Mechanics",
    source: "C++ Programming Reference"
  },
  {
    id: "oop_q31",
    number: 31,
    text: "How does an elegant recursive function stop calling itself to avoid stack overflow risks?",
    options: [
      "By implementing a conditional base case statement that leads to a return",
      "By using a static boundary loop",
      "By terminating the parent thread automatically",
      "By calling an external auxiliary function"
    ],
    correctAnswer: "A",
    explanation: "Recursive functions must reach a base case—a conditional check that returns immediately without calling itself again, preventing infinite stacking and crash bugs.",
    category: "Programming Mechanics",
    source: "SWE Mock Papers"
  },
  {
    id: "oop_q32",
    number: 32,
    text: "How does the space complexity of an iterative solution typically compare to a recursive solution for the same problem?",
    options: [
      "They consume the exact same amount of memory",
      "Iterative solutions always consume more space than recursion",
      "It depends on the specific problem and the stack frames requirements",
      "Recursive solutions always use exactly O(1) space"
    ],
    correctAnswer: "C",
    explanation: "Recursion consumes O(N) space due to stack frames. However, if the recursion is tail-optimized, or if iteration requires separate collections, exact ratios depend heavily on the problem structures.",
    category: "Algorithm Complexity",
    source: "SWE Mock Papers"
  },
  {
    id: "oop_q33",
    number: 33,
    text: "What is the primary physical objective of the C++ iostream components and the fstream library?",
    options: [
      "To optimize visual canvas renders",
      "To parse user mouse clicks in GUI applications",
      "To handle file stream input and output data transfers to storage",
      "To resolve dynamic math calculations"
    ],
    correctAnswer: "C",
    explanation: "C++ fstream is used to open, read, filter, write, and close file resources dynamically as standard buffered byte streams.",
    category: "Programming Mechanics",
    source: "SWE Mock Papers"
  },
  {
    id: "oop_q34",
    number: 34,
    text: "Which of the following statements about dynamic memory allocation with new/delete is true?",
    options: [
      "Allocations with 'new' are placed in the stack environment",
      "The 'new' operator returns null or throws an exception if memory allocation fails",
      "Memory allocated by 'new' is automatically garbage-collected in C++",
      "Only static variables can utilize the 'new' keyword"
    ],
    correctAnswer: "B",
    explanation: "Dynamic memory allocation allocates bytes directly on the heap. If space is exhausted, 'new' throws std::bad_alloc or returns nullptr (if noexcept used), requiring manual 'delete' afterward in C++.",
    category: "Memory Management",
    source: "C++ Standard reference"
  },
  {
    id: "oop_q35",
    number: 35,
    text: "Which of the following is true about the standard 'break' statement?",
    options: [
      "It terminates the current function thread immediately",
      "It skips remaining checks in an if-else block",
      "It exits a loop or switch block entirely, resuming execution at the next sequential statement",
      "It terminates the entire operating system process"
    ],
    correctAnswer: "C",
    explanation: "A break statement causes the innermost loop or surrounding switch block to terminate immediately, bypassing remaining check steps to continue the program.",
    category: "Programming Mechanics",
    source: "C++ Core Guides"
  },
  {
    id: "oop_q36",
    number: 36,
    text: "Which design pattern is most closely associated with the OO design principle 'Favor composition over inheritance'?",
    options: [
      "Singleton pattern",
      "Factory method pattern",
      "Strategy pattern",
      "Adapter template pattern"
    ],
    correctAnswer: "C",
    explanation: "The Strategy pattern encapsulates interchangeable behaviors inside a separate strategy class, composing them inside the parent context dynamically rather than hardcoding subclasses.",
    category: "OOP Design Patterns",
    source: "Gang of Four reference"
  },
  {
    id: "oop_q37",
    number: 37,
    text: "What defines the main objective of the super() call within subclass constructors?",
    options: [
      "To invoke a custom method from a sibling class",
      "To execute the parent/superclass constructor prior to run subclass initializations",
      "To terminate subclass objects securely",
      "To allocate heap arrays to properties"
    ],
    correctAnswer: "B",
    explanation: "super() delegates parent initialization to the superclass constructor, ensuring base elements and inheritance variables are fully instantiated before child rules run.",
    category: "OOP Concepts",
    source: "Java OOP Handbook"
  },
  {
    id: "oop_q38",
    number: 38,
    text: "Spot the error in the following C++ code fragment: try { int x = -1; if (x < 0) { throw x; } } catch (unsigned int e) { cout << e; }",
    options: [
      "The caught exception value is not a valid constant variable",
      "The 'if' check cannot evaluate inside a try block",
      "The catch block is trying to trap the wrong exception type (throws signed int, catches unsigned)",
      "Recursion bounds are violated"
    ],
    correctAnswer: "C",
    explanation: "The thrown variable 'x' is a signed 'int'. The catch block is typed to accept 'unsigned int'. Because types do not match, the exception will propagate unhandled, crashing the program.",
    category: "Programming Mechanics",
    source: "C++ Exception Handling"
  },
  {
    id: "oop_q39",
    number: 39,
    text: "Assuming name is set to 'John', what will print in C++ console: cout << 'Hello, ' << name << '!';",
    options: [
      "Hello, name!",
      "Hello, John!",
      "Compilation error output",
      "Null reference memory exception"
    ],
    correctAnswer: "B",
    explanation: "Standard C++ stream operators process the variable sequence sequentially to produce 'Hello, John!' printed cleanly via standard out.",
    category: "Programming Mechanics",
    source: "C++ Programming Reference"
  },
  {
    id: "oop_q40",
    number: 40,
    text: "Which keyword defines an object attribute or method as accessible directly from the class namespace without needing an instantiated object?",
    options: [
      "static",
      "const",
      "final",
      "public"
    ],
    correctAnswer: "A",
    explanation: "The static keyword tags members as class-wide, persisting a single instance in global namespaces accessible directly via ClassName::member.",
    category: "OOP Concepts",
    source: "OOP Concepts Guide"
  },
  {
    id: "oop_q41",
    number: 41,
    text: "What does the C++ 'sizeof' operator return when passed an array name as an argument?",
    options: [
      "The total length representing the number of items stored in the array",
      "The index of the first array element",
      "The total memory size of the array, represented in bytes",
      "The memory address of the first array index pointers"
    ],
    correctAnswer: "C",
    explanation: "sizeof(array_name) returns the total byte size containing the array. To parse length, developers divide this value by sizeof(array_name[0]).",
    category: "Memory Management",
    source: "C++ Memory Standards"
  },
  {
    id: "oop_q42",
    number: 42,
    text: "Which parameter passing style is most efficient when moving large objects and classes to functions in C++?",
    options: [
      "Call by object value duplications",
      "Call by copy references",
      "Call by reference (or reference to const)",
      "Passing via local environment parameters"
    ],
    correctAnswer: "C",
    explanation: "Passing by reference (const Type&) avoids copying raw objects onto stack frame allocations, speeding up executions for complex classes while protecting original properties.",
    category: "Programming Mechanics",
    source: "C++ Tuning Guides"
  },
  {
    id: "oop_q43",
    number: 43,
    text: "Which of the following violates C++ naming rules and represents an invalid variable identifier?",
    options: [
      "myVar_2",
      "2ndVar",
      "_variable",
      "myVar"
    ],
    correctAnswer: "B",
    explanation: "C++ identifiers (variable and function names) must start with an alphabet letter or an underscore (_). They can never start with a numeric digit, making '2ndVar' invalid.",
    category: "Programming Mechanics",
    source: "C++ Syntax Basics"
  },
  {
    id: "oop_q44",
    number: 44,
    text: "Which of the following is NOT an inherent, fundamental primitive data type in modern C++ compiler specs?",
    options: [
      "int",
      "float",
      "char",
      "string"
    ],
    correctAnswer: "D",
    explanation: "string is a standard library class (std::string) defined in the <string> header, whereas int, float, and char are built-in native primitive compiler types.",
    category: "Programming Mechanics",
    source: "C++ Data Types"
  },
  {
    id: "oop_q45",
    number: 45,
    text: "Which of the following statements about constructors in standard Java classes is true?",
    options: [
      "A constructor can be defined as static",
      "A constructor can be defined as abstract",
      "A constructor can be defined with the final keyword",
      "A constructor can be defined with the private access modifier"
    ],
    correctAnswer: "D",
    explanation: "Classes can implement private constructors to forbid direct instantiation from client namespaces, which is standard when designing Singleton patterns or utility classes.",
    category: "OOP Concepts",
    source: "Java OOP Handbook"
  }
];


export const DATABASE_SYSTEMS_QUESTIONS: Question[] = [
  {
    id: "db_q1",
    number: 1,
    text: "What constraint does the Boyce-Codd Normal Form (BCNF) assert for every non-trivial functional dependency X -> Y?",
    options: [
      "X must be a composite primary key",
      "The determinant X must be a candidate key / superkey",
      "Y must be an atomic integer coordinate",
      "All non-prime attributes must be mutually independent"
    ],
    correctAnswer: "B",
    explanation: "BCNF is a strict layout of 3NF. Under BCNF rules, for every non-trivial functional dependency X -> Y, the left-hand determinant X must be a candidate key, eliminating remaining anomalies.",
    category: "Normalization",
    source: "AASTU Normalization Assess"
  },
  {
    id: "db_q2",
    number: 2,
    text: "How is a many-to-many relationship between two entities parsed and resolved in standard relational database schemas?",
    options: [
      "By creating a foreign key in one of the tables pointing directly to the other",
      "By introducing a junction / bridge table containing composite foreign keys pointing to both entities",
      "By storing comma-separated values in text fields",
      "By setting unique constraints on the parent attributes"
    ],
    correctAnswer: "B",
    explanation: "Many-to-many relationships are normalized by creating a junction table (also called an associative table) that converts the relationship into two distinct one-to-many relationships.",
    category: "Relational Design",
    source: "Relational Mapping Guides"
  },
  {
    id: "db_q3",
    number: 3,
    text: "Which SQL join returns all rows from the left table and any matching records from the right table, filling with NULL values, where no matches represent?",
    options: [
      "INNER JOIN",
      "LEFT JOIN",
      "RIGHT JOIN",
      "FULL OUTER JOIN"
    ],
    correctAnswer: "B",
    explanation: "A LEFT OUTER JOIN preserves the entire dataset of the left table. If rows match the right parameters, data is populated; otherwise, DBMS outputs NULL indicators.",
    category: "Query languages",
    source: "SQL Reference Handbook"
  },
  {
    id: "db_q4",
    number: 4,
    text: "What is the primary physical benefit of configuring database indexes on highly queried table coordinates?",
    options: [
      "To enforce referential integrity across related tables",
      "To guarantee mathematical consistency during transaction rollbacks",
      "To accelerate data retrieval operations by avoiding expensive full-table scans",
      "To permanently sort table records physically on disk"
    ],
    correctAnswer: "C",
    explanation: "Indexes are secondary structures (typically B-Trees) that allow the query planner to quickly locate target values without scanning every sequential row in the table, boosting query speed.",
    category: "Relational Design",
    source: "Database Tuning Guides"
  },
  {
    id: "db_q5",
    number: 5,
    text: "What is the main objective of denormalization in strategic database schema tuning?",
    options: [
      "To eliminate all redundant records and save storage space",
      "To improve read query performance by introducing controlled redundancy, reducing expensive joins",
      "To enforce strict referential constraints across tables",
      "To isolate transaction blocks from concurrent access"
    ],
    correctAnswer: "B",
    explanation: "Denormalization purposely introduces controlled redundancy into normalized tables to skip expensive SQL JOIN operations, prioritizing read speed over redundant storage efficiency.",
    category: "Normalization",
    source: "Database Tuning Guides"
  },
  {
    id: "db_q6",
    number: 6,
    text: "In relational algebra, if we wish to select specific columns (such as loan_number and amount) from a table and discard other attributes, which operator is applied?",
    options: [
      "Select (Sigma)",
      "Project (Pi)",
      "Join (Bowtie)",
      "Cartesian Product"
    ],
    correctAnswer: "B",
    explanation: "The Project operation (represented by the symbol Pi) acts as a vertical filter in relational algebra, returning only specified column attributes and filtering out others.",
    category: "Query languages",
    source: "Relational Algebra Guide"
  },
  {
    id: "db_q7",
    number: 7,
    text: "Suppose a customer entity set has a column attribute 'loan_taken' which is calculated by counting customer loan records dynamically. 'loan_taken' is a:",
    options: [
      "Derived Attribute",
      "Composite Attribute",
      "Multivalued Attribute",
      "Key Attribute"
    ],
    correctAnswer: "A",
    explanation: "A derived attribute is one that is not stored statically in the database but is computed at query time using other data (e.g., calculating age from date of birth).",
    category: "Relational Design",
    source: "ER Diagram Syllabus"
  },
  {
    id: "db_q8",
    number: 8,
    text: "Which database concurrency anomaly describes a scenario where transaction T1 reads a record altered by transaction T2 before T2 has committed, which T2 subsequently rolls back?",
    options: [
      "Non-repeatable Read",
      "Dirty Read",
      "Phantom Read",
      "Lost Update"
    ],
    correctAnswer: "B",
    explanation: "A dirty read occurs when a transaction reads uncommitted changes. If the transaction that wrote those changes aborts/rolls back, the reading transaction has evaluated invalid, 'dirty' data.",
    category: "Transactions & Concurrency",
    source: "Transactions & Locking Handbook"
  },
  {
    id: "db_q9",
    number: 9,
    text: "In the ANSI SQL standard, what is the default order of precedence for evaluating Boolean operators in WHERE filter phrases?",
    options: [
      "AND evaluated first, OR second, NOT last",
      "NOT evaluated first, AND second, OR last",
      "OR evaluated first, NOT second, AND last",
      "They are evaluated strictly left-to-right regardless of operator type"
    ],
    correctAnswer: "B",
    explanation: "In SQL, Boolean operators resolve in a strict precedence chain: NOT receives top priority, AND represents second priority, and OR is evaluated last.",
    category: "Query languages",
    source: "SQL Precedence Standards"
  },
  {
    id: "db_q10",
    number: 10,
    text: "In the standard ANSI-SPARC three-schema database architecture, which level resides closest to the end-user views?",
    options: [
      "External / View level",
      "Conceptual level",
      "Internal / Physical level",
      "Logical level"
    ],
    correctAnswer: "A",
    explanation: "The External Level is the top tier, detailing user-specific subsets of data via views, hiding conceptual table relationships and physical storage mechanics from end-users.",
    category: "Relational Design",
    source: "ANSI-SPARC Architecture"
  },
  {
    id: "db_q11",
    number: 11,
    text: "Which of the following terms defines the exact collection of information stored inside database structures at a specific, given moment?",
    options: [
      "Database Metadata",
      "Schema of the database",
      "Database View",
      "Instance of the database"
    ],
    correctAnswer: "D",
    explanation: "While the database schema defines the static skeletal structure, a database 'instance' holds the actual data records residing inside tables at any specific snapshot in time.",
    category: "Relational Design",
    source: "Relational Foundations Exam"
  },
  {
    id: "db_q12",
    number: 12,
    text: "What does the ACID acronym stand for in relational transactional systems?",
    options: [
      "Access, Consistency, Integrity, Durability",
      "Atomicity, Consistency, Isolation, Durability",
      "Availability, Conciseness, Isolation, Distribution",
      "Authority, Certification, Identity, Decryption"
    ],
    correctAnswer: "B",
    explanation: "ACID guarantees that transactions are processed reliably: Atomicity (all-or-nothing), Consistency (integrity bounds), Isolation (independent concurrency), and Durability (permanent storage state).",
    category: "Transactions & Concurrency",
    source: "Relational Foundations Exam"
  },
  {
    id: "db_q13",
    number: 13,
    text: "A foreign key constraint on a table is primarily defined to enforce what relational database concept?",
    options: [
      "Domain Integrity",
      "Entity Integrity",
      "Referential Integrity",
      "Transaction Isolation"
    ],
    correctAnswer: "C",
    explanation: "Referential integrity guarantees that relationships between tables stay consistent, preventing orphan records by ensuring foreign keys point to valid primary keys.",
    category: "Relational Design",
    source: "Relational Design Exams"
  },
  {
    id: "db_q14",
    number: 14,
    text: "Which of the following is NOT a Data Manipulation Language (DML) SQL command?",
    options: [
      "INSERT",
      "UPDATE",
      "ALTER TABLE",
      "DELETE"
    ],
    correctAnswer: "C",
    explanation: "ALTER TABLE modifies the table's structural definition (columns, types, constraint parameters). Consequently, it is a Data Definition Language (DDL) command, not a DML command.",
    category: "Query languages",
    source: "SQL DDL vs DML"
  },
  {
    id: "db_q15",
    number: 15,
    text: "In database queries, what represents a 'Natural Join' operation?",
    options: [
      "A join that matches all records having arbitrary expression parameters",
      "A join that automatically equates columns sharing identical names across participating tables, filtering out duplicate coordinates",
      "A join requiring the database driver to evaluate physical disk files",
      "A join resulting in a full cartesian cross-product output"
    ],
    correctAnswer: "B",
    explanation: "A natural join matches tables on all columns with identical names and types. It automatically generates equivalence conditions for these columns and removes duplicate search attributes from the output.",
    category: "Query languages",
    source: "Relational algebra"
  },
  {
    id: "db_q16",
    number: 16,
    text: "Which database lock type allows multiple concurrent transactions to read a record but blocks any transaction from performing write modifications?",
    options: [
      "Exclusive / Write Lock",
      "Shared / Read Lock",
      "Intent Lock",
      "Deadlock Lock"
    ],
    correctAnswer: "B",
    explanation: "Shared locks (S-locks) allow concurrent reads. However, no transaction can acquire an exclusive write lock (X-lock) to alter values until all shared locks have been released.",
    category: "Transactions & Concurrency",
    source: "Transactions & Locking Handbook"
  },
  {
    id: "db_q17",
    number: 17,
    text: "What does a database 'view' represent?",
    options: [
      "A secondary index cache speeding up query reads",
      "A virtual table defined by a query, whose contents are generated dynamically when accessed",
      "A physical storage partition separating log files",
      "A structural backup mechanism tracking transaction commits"
    ],
    correctAnswer: "B",
    explanation: "A view is a logical object representing a stored SELECT query. It acts as a dynamic virtual table. The DBMS executes the underlying query on-the-fly when the view is queried.",
    category: "Relational Design",
    source: "SQL Views Sheet"
  },
  {
    id: "db_q18",
    number: 18,
    text: "In distributed NoSQL systems, what defines the 'Eventual Consistency' data replication model?",
    options: [
      "All distributed nodes update synchronously, causing write blockings",
      "Replicas will eventually converge to hold identical data states over time, assuming no further updates occur",
      "Data consistency constraints are permanently disabled to maximize reading speeds",
      "Single-node databases writing to local disks without remote replication"
    ],
    correctAnswer: "B",
    explanation: "Eventual Consistency is a relaxed replication model. It guarantees that if no fresh updates are sent, all replicas will eventually synchronize and return identical coordinate values, offering fast writes.",
    category: "Transactions & Concurrency",
    source: "Distributed Systems Syllabus"
  },
  {
    id: "db_q19",
    number: 19,
    text: "Why do standard database engines automatically construct a B-tree index over defined Primary Key columns?",
    options: [
      "To enforce referential values across child tables",
      "To guarantee ultra-fast primary key lookups and verify entity unique constraints efficiently",
      "To prevent transaction rollbacks from corrupting records",
      "To split table storage directories across different partitions"
    ],
    correctAnswer: "B",
    explanation: "Primary Keys must be unique. The DBMS engine uses an auto-created index to quickly lookup incoming keys to prevent duplicate insertions, while speeding up joins and point queries.",
    category: "Relational Design",
    source: "Database Tuning Guides"
  },
  {
    id: "db_q20",
    number: 20,
    text: "In relational design, what key anomaly does the Third Normal Form (3NF) specifically correct and eliminate?",
    options: [
      "Multi-valued dependencies",
      "Partial dependencies on composite primary keys",
      "Transitive functional dependencies between non-key columns",
      "Primary key duplication issues"
    ],
    correctAnswer: "C",
    explanation: "While 2NF eliminates partial dependencies, 3NF ensures no non-key attribute is transitively dependent on the primary key via another non-key attribute (eliminating non-key to non-key dependencies).",
    category: "Normalization",
    source: "Normalization Exams"
  },
  {
    id: "db_q21",
    number: 21,
    text: "In relational database design models, what does BCNF specifically require to prevent database schema anomalies?",
    options: [
      "No partial functional dependencies can exist",
      "Every left-hand determinant in functional dependencies must be a candidate key",
      "All transitivity options are completely removed",
      "All systems tables are restricted to 1NF parameters"
    ],
    correctAnswer: "B",
    explanation: "BCNF asserts that for any functional dependency A -> B, the determinant dependency column 'A' must be a candidate superkey of the table, correcting anomalies untouched by 3NF.",
    category: "Normalization",
    source: "Relational Normalization Guides"
  },
  {
    id: "db_q22",
    number: 22,
    text: "What represents the primary objective of constructing secondary indexes over relational tables?",
    options: [
      "To enforce referential integrity checks on rows",
      "To prevent duplicate key inserts automatically",
      "To speed up database data retrieval and query reads",
      "To physically sort table segments permanently on local disks"
    ],
    correctAnswer: "C",
    explanation: "Indexes are auxiliary index look-up trees (B-Trees). They let query engines locate matching records recursively without executing slow, full sequential table walks.",
    category: "Relational Design",
    source: "Database Tuning Guides"
  },
  {
    id: "db_q23",
    number: 23,
    text: "Which of the following options represents an invalid SQL primitive data type in the SQL standard specifications?",
    options: [
      "VARCHAR",
      "TEXT",
      "STRING",
      "BIGINT"
    ],
    correctAnswer: "C",
    explanation: "STRING is not a standard ANSI SQL keyword type. Standard databases use CHAR, VARCHAR, or TEXT types to manage string attributes.",
    category: "Query languages",
    source: "SQL Standard Reference"
  },
  {
    id: "db_q24",
    number: 24,
    text: "How is a many-to-many cardinality relationship between two relational tables resolved cleanly in relational design?",
    options: [
      "By adding foreign keys to both tables pointing to each other",
      "By implementing a separate junction/intermediate table with foreign key references tracing back to both tables",
      "By placing comma-separated text identifiers inside single fields",
      "By configuring primary keys on all attributes"
    ],
    correctAnswer: "B",
    explanation: "Relational tables cannot map directly to many-to-many relationships without violating first normal form. Designing a junction table splits the many-to-many relationship into two one-to-many tables.",
    category: "Relational Design",
    source: "Relational Mapping Guides"
  },
  {
    id: "db_q25",
    number: 25,
    text: "What defines the main objective of database denormalization?",
    options: [
      "To save disk storage by reducing redundant elements",
      "To improve read query performance by selectively duplicating attributes, avoiding expensive JOIN statements",
      "To enforce strict constraints across database files",
      "To avoid concurrent read locks during transactions"
    ],
    correctAnswer: "B",
    explanation: "Denormalization purposely places redundant data in tables, decreasing the count of SQL JOINs required to compile reports, optimization query speeds under heavy workloads.",
    category: "Normalization",
    source: "Database Tuning Guides"
  },
  {
    id: "db_q26",
    number: 26,
    text: "In Microsoft SQL, what is the 'NOLOCK' table hint equivalent to in terms of transaction isolation levels?",
    options: [
      "READ UNCOMMITTED",
      "READ COMMITTED",
      "SERIALIZABLE",
      "REPEATABLE READ"
    ],
    correctAnswer: "A",
    explanation: "NOLOCK tells the query engine to scan tables without acquiring shared read locks, permitting 'dirty reads' of modified records yet preventing locking delays.",
    category: "Transactions & Concurrency",
    source: "SQL Server Tuning"
  },
  {
    id: "db_q27",
    number: 27,
    text: "The ability to alter conceptual schemas without impacting external views or application logic is known as:",
    options: [
      "Physical Data Independence",
      "Logical Data Independence",
      "Program-Data Independence",
      "Data Abstraction levels"
    ],
    correctAnswer: "B",
    explanation: "Logical Data Independence defines the ability to adjust the logical schema (e.g. changing column names or table splits) without forcing updates over existing user applications or views.",
    category: "Relational Design",
    source: "Database Architecture Sheet"
  },
  {
    id: "db_q28",
    number: 28,
    text: "Which database term refers to the collection and actual values of records stored in the database files at a specific point in time?",
    options: [
      "Database schema",
      "Data domain",
      "Metadata",
      "Instance of the database"
    ],
    correctAnswer: "D",
    explanation: "A database schema represents the static structural design (types, relationships), whereas a database instance is the actual variable snapshot of populated records inside.",
    category: "Relational Design",
    source: "Database Core Guidelines"
  },
  {
    id: "db_q29",
    number: 29,
    text: "To list all loan numbers and amounts from a LOANS relation without including branch identifiers, which relational algebra operator is used?",
    options: [
      "Union (∪)",
      "Cartesian Product (×)",
      "Set Difference (−)",
      "Projection (π)"
    ],
    correctAnswer: "D",
    explanation: "The Projection operator (π) takes a relation and outputs a subset of attributes (columns), filtering out unrequested columns like branch name.",
    category: "Relational Design",
    source: "Relational Algebra Guide"
  },
  {
    id: "db_q30",
    number: 30,
    text: "If a 'Dormitory' entity features an attribute 'occupant_count' that automatically sums students checked into that dorm, 'occupant_count' is classified as a:",
    options: [
      "Derived Attribute",
      "Composite Attribute",
      "Multi-valued Attribute",
      "Simple Identifier"
    ],
    correctAnswer: "A",
    explanation: "Derived attributes are values calculated on-the-fly or dynamically from existing stored database records, rather than representing static independent variables.",
    category: "Relational Design",
    source: "ER Modeling Syllabus"
  },
  {
    id: "db_q31",
    number: 31,
    text: "Which relational normalization level focuses on removing partial dependencies, ensuring that every non-key column is fully dependent on the entire composite primary key?",
    options: [
      "First Normal Form (1NF)",
      "Second Normal Form (2NF)",
      "Third Normal Form (3NF)",
      "Boyce-Codd Normal Form (BCNF)"
    ],
    correctAnswer: "B",
    explanation: "A table is in 2NF if it satisfies 1NF constraints and does not contain partial dependencies (meaning no non-key attribute is dependent on a proper subset of a composite primary key).",
    category: "Normalization",
    source: "Normalization Exams"
  },
  {
    id: "db_q32",
    number: 32,
    text: "Which Normal Form removes transitive dependencies, ensuring no non-key attribute is dependent on another non-key attribute?",
    options: [
      "Second Normal Form (2NF)",
      "First Normal Form (1NF)",
      "Third Normal Form (3NF)",
      "Boyce-Codd Normal Form (BCNF)"
    ],
    correctAnswer: "C",
    explanation: "3NF builds on 2NF by removing transitive dependencies. This means non-key columns can only depend on the primary key, eliminating non-key to non-key dependency chains.",
    category: "Normalization",
    source: "Normalization Exams"
  },
  {
    id: "db_q33",
    number: 33,
    text: "What defines a core responsibility of a Database Administrator (DBA)?",
    options: [
      "Writing application source code models",
      "Designing graphics for mobile app screens",
      "Overseeing, optimizing, and managing database servers and resources",
      "Executing point queries solely inside test terminals"
    ],
    correctAnswer: "C",
    explanation: "DBAs manage DB systems, ensuring uptime, backing up files, monitoring connection performance, setting schemas, and administering access roles safely.",
    category: "Relational Design",
    source: "DB Administration Syllabus"
  },
  {
    id: "db_q34",
    number: 34,
    text: "In the database systems approach, program-data independence asserts that:",
    options: [
      "Programs can update data tables simultaneously without locking checks",
      "Logical data schemas and compiled applications are defined separately, preventing changes to file formats from forcing application rewrites",
      "Applications are tightly coupled with physical hardware",
      "All security rules are compiled inside DBMS systems"
    ],
    correctAnswer: "B",
    explanation: "Program-data independence decouples physical files from applications using conceptual mapping schemas in the DBMS, protecting apps from updates to physical layouts.",
    category: "Relational Design",
    source: "DB Administration Syllabus"
  },
  {
    id: "db_q35",
    number: 35,
    text: "Which relational algebra operation retrieves specific rows/tuples that satisfy a given filter condition?",
    options: [
      "Project (π)",
      "Union (∪)",
      "Selection (σ)",
      "Join (⋈)"
    ],
    correctAnswer: "C",
    explanation: "The Selection operator (σ) applies a predicate filter over rows in a table to extract a subset of matching records (horizontal partitioning).",
    category: "Relational Design",
    source: "Relational Algebra Guide"
  },
  {
    id: "db_q36",
    number: 36,
    text: "Under standard EVM (Earned Value Management) rules, what defined formula yields the Cost Performance Index (CPI)?",
    options: [
      "CPI = Earned Value / Actual Cost",
      "CPI = Planned Value / Actual Cost",
      "CPI = Earned Value / Planned Value",
      "CPI = Actual Cost / Earned Value"
    ],
    correctAnswer: "A",
    explanation: "CPI measures cost efficiency by evaluating the ratio of Earned Value (EV) over Actual Cost (AC). A value greater than 1 represents performing under budget.",
    category: "Relational Design",
    source: "Project Management Exams"
  },
  {
    id: "db_q37",
    number: 37,
    text: "Which SQL query is correct to delete the publisher named 'XWZ' from the PUBLISHER table?",
    options: [
      "DELETE FROM BOOK_AUTHOR WHERE Address = 'XWZ';",
      "DELETE FROM PUBLISHER WHERE Name = 'XWZ';",
      "DELETE Name = 'XWZ' FROM PUBLISHER;",
      "DELETE FROM BOOK WHERE Name = 'XWZ';"
    ],
    correctAnswer: "B",
    explanation: "The SQL syntax 'DELETE FROM table_name WHERE condition;' is correct, identifying target rows to remove from PUBLISHER.",
    category: "Query languages",
    source: "Standard SQL Guide"
  },
  {
    id: "db_q38",
    number: 38,
    text: "Which database component is responsible for checking lock tables and maintaining concurrent transactions safely?",
    options: [
      "Query optimizer",
      "Query processor",
      "Lock manager",
      "Log writer"
    ],
    correctAnswer: "C",
    explanation: "The database lock manager coordinates locking levels (shared, exclusive, intention keys) to ensure safe transaction processing under concurrent execution.",
    category: "Transactions & Concurrency",
    source: "Concurrency Control Handbook"
  },
  {
    id: "db_q39",
    number: 39,
    text: "In SQL, what is the default behavior of the referential triggered action 'ON UPDATE CASCADE'?",
    options: [
      "It nullifies the referencing foreign key values",
      "It changes the referencing foreign key value to the exact matching updated value in the parent row",
      "It sets referencing primary key to default values",
      "It deletes all referencing tuples immediately"
    ],
    correctAnswer: "B",
    explanation: "ON UPDATE CASCADE ensures that updating parent primary keys automatically cascades down to update matching referencing foreign key records to keep relationships consistent.",
    category: "Relational Design",
    source: "Referential Integrity Guides"
  },
  {
    id: "db_q40",
    number: 40,
    text: "Which normal form of relational database design is considered generally adequate for most applications?",
    options: [
      "First Normal Form (1NF)",
      "Second Normal Form (2NF)",
      "Third Normal Form (3NF)",
      "Fifth Normal Form (5NF)"
    ],
    correctAnswer: "B",
    explanation: "Third Normal Form (3NF) reduces redundant data and prevents anomalies in relational schemas, which is sufficient for typical business and enterprise applications.",
    category: "Normalization",
    source: "Normalization Exams"
  },
  {
    id: "db_q41",
    number: 41,
    text: "An expression of the form { <X1, X2,...,Xn> | P(X1, X2,...,Xn) } in database query theory represents:",
    options: [
      "Domain Relational Calculus",
      "Relational Algebra",
      "Tuple Relational Calculus",
      "Non-relational schemas"
    ],
    correctAnswer: "A",
    explanation: "Domain relational calculus evaluates variables directly mapping to attribute domains (columns) rather than evaluating whole tuples (rows) as in Tuple Relational Calculus.",
    category: "Relational Design",
    source: "Theory of Databases"
  },
  {
    id: "db_q42",
    number: 42,
    text: "An ER diagram can express the overall _______ of a database graphically.",
    options: [
      "View Structure",
      "Model Structure",
      "Architectural Structure",
      "Analytical Structure"
    ],
    correctAnswer: "C",
    explanation: "ER diagrams provide a clean visual abstraction representing entities, relationships, attributes, and indexes mapping to conceptual database models (architectural structure).",
    category: "Relational Design",
    source: "Database Modeling Syllabus"
  },
  {
    id: "db_q43",
    number: 43,
    text: "Which database constraint ensures that the relationships between tables remains consistent over updates/deletions?",
    options: [
      "Primary key",
      "Foreign key",
      "Unique key",
      "Check constraint"
    ],
    correctAnswer: "B",
    explanation: "Foreign key constraints enforce referential integrity rules, verifying child coordinates always correspond to a valid parent tuple key.",
    category: "Relational Design",
    source: "Database Tuning Guides"
  },
  {
    id: "db_q44",
    number: 44,
    text: "In databases, which ACID transaction property is violated if system allows interference between concurrent transactions?",
    options: [
      "Isolation",
      "Durability",
      "Atomicity",
      "Consistency"
    ],
    correctAnswer: "A",
    explanation: "Isolation ensures concurrent executions appear identical to serial executions, blocking concurrent transactions from reading incomplete states.",
    category: "Transactions & Concurrency",
    source: "Transactions & Locking Handbook"
  },
  {
    id: "db_q45",
    number: 45,
    text: "Which distributed database technique splits relationships into smaller segments logically by rows?",
    options: [
      "Horizontal Replication",
      "Vertical Fragmentation",
      "Vertical Replication",
      "Horizontal Fragmentation"
    ],
    correctAnswer: "D",
    explanation: "Horizontal Fragmentation (partitioning) divides relations vertically, allocating subsets of tables (rows) across different storage servers.",
    category: "Relational Design",
    source: "Distributed Systems Guide"
  }
];


export const OPERATING_SYSTEMS_QUESTIONS: Question[] = [
  {
    id: "os_q1",
    number: 1,
    text: "Which physical memory management technique completely avoids external memory fragmentation?",
    options: [
      "Dynamic Partitioning",
      "Contiguous Allocation",
      "Segmentation",
      "Paging"
    ],
    correctAnswer: "D",
    explanation: "Paging divides physical memory into fixed-sized blocks called frames. Because process pages are allocated into arbitrary frames, there is zero external fragmentation, though internal fragmentation may occur.",
    category: "Memory Management",
    source: "Operating Systems exit reference"
  },
  {
    id: "os_q2",
    number: 2,
    text: "Which scenario best demonstrates a complete operating system 'deadlock' state?",
    options: [
      "A high-priority process consumes 100% of the active CPU resources",
      "Two or more processes are waiting indefinitely for resources held by each other, where none can proceed",
      "An application attempts to reference a null pointer address",
      "The virtual paging system swaps pages too rapidly to process tasks"
    ],
    correctAnswer: "B",
    explanation: "Deadlock is a circular wait situation. Processes are stuck in a blocked state because each holds a resource the other needs, and neither can release its held resource.",
    category: "Concurrency",
    source: "Deadlock study sheet"
  },
  {
    id: "os_q3",
    number: 3,
    text: "What represents operating system 'thrashing'?",
    options: [
      "A process terminating due to unhandled exceptions",
      "Excessive page swapping between main memory and virtual swap disks, leaving the CPU idle of useful work",
      "A physical hardware failure causing server crashes",
      "High register optimization by compilers during packaging"
    ],
    correctAnswer: "B",
    explanation: "Thrashing occurs when the collective active pages (working set) of running processes exceeds physical RAM. The OS spends more time reading and writing pages from swap disks than executing actual code.",
    category: "Memory Management",
    source: "Memory Management Syllabus"
  },
  {
    id: "os_q4",
    number: 4,
    text: "Which CPU scheduling algorithm is most susceptible to process starvation when a steady stream of short, high-priority tasks arrives?",
    options: [
      "Round-Robin Scheduling",
      "First-Come, First-Served",
      "Priority-Based / Shortest Job First Scheduling",
      "Fair-Share Queue Scheduling"
    ],
    correctAnswer: "C",
    explanation: "Priority and SJF list queues based on shortest weights or high priorities. If such tasks arrive continuously, low-priority/long tasks are indefinitely postponed, starving for CPU cycles.",
    category: "CPU Scheduling",
    source: "Process Scheduling Standard"
  },
  {
    id: "os_q5",
    number: 5,
    text: "In an operating system, what is the core responsibility of the kernel scheduler?",
    options: [
      "To check incoming network files for security threats",
      "To determine which process from the ready queue is allocated CPU time at any specific interval",
      "To translate high-level variables to storage registers",
      "To optimize physical virtual memory swap sizes on disk"
    ],
    correctAnswer: "B",
    explanation: "The short-term scheduler (or dispatcher) selects an active process from the ready cache and assigns it to a CPU core, keeping resources maximized and ensuring responsive multitasking.",
    category: "CPU Scheduling",
    source: "Process Scheduling Standard"
  },
  {
    id: "os_q6",
    number: 6,
    text: "What does virtual memory enable an operating system to do?",
    options: [
      "Run multiple processes by treating secondary disk space as an extension of main physical RAM",
      "Completely bypass using physical RAM chips to save energy",
      "Eliminate the need for context switching",
      "Run server scripts without an active CPU processor"
    ],
    correctAnswer: "A",
    explanation: "Virtual memory maps process address spaces to physical RAM and secondary storage (swap file/page file). This allows loading processes that collectively exceed the machine's actual RAM capacity.",
    category: "Memory Management",
    source: "Memory Management Syllabus"
  },
  {
    id: "os_q7",
    number: 7,
    text: "What is the primary role of the Address Resolution Protocol (ARP) in TCP/IP networking?",
    options: [
      "To resolve dynamic IP coordinates to domain names",
      "To map IP addresses on a local network to physical hardware MAC addresses",
      "To encrypt data payloads before transport over wireless routers",
      "To allocate dynamic IP coordinates to newly added network devices"
    ],
    correctAnswer: "B",
    explanation: "ARP operates at the link layer. It broadcasts query frames over the local network to locate the physical hardware MAC address corresponding to a known destination IP address.",
    category: "Networks & Protocols",
    source: "Networking exit reference"
  },
  {
    id: "os_q8",
    number: 8,
    text: "In classful IP addressing parameters, what range contains default Class C IP addresses?",
    options: [
      "0.0.0.0 to 127.255.255.255",
      "128.0.0.0 to 191.255.255.255",
      "192.0.0.0 to 223.255.255.255",
      "224.0.0.0 to 239.255.255.255"
    ],
    correctAnswer: "C",
    explanation: "Class C addresses occupy 192.0.0.0 through 223.255.255.255, with the first three bits of the header set to 110. They are typically used for smaller local networks.",
    category: "Networks & Protocols",
    source: "Networking exit reference"
  },
  {
    id: "os_q9",
    number: 9,
    text: "Which protocol operates at the Transport Layer (Layer 4) of the standard OSI model?",
    options: [
      "Internet Protocol (IP)",
      "Transmission Control Protocol (TCP)",
      "Hypertext Transfer Protocol (HTTP)",
      "Address Resolution Protocol (ARP)"
    ],
    correctAnswer: "B",
    explanation: "TCP operates at Layer 4 (Transport layer), providing connection-oriented, reliable, ordered, and error-checked delivery of byte streams between applications.",
    category: "OSI Layers",
    source: "Networking exit reference"
  },
  {
    id: "os_q10",
    number: 10,
    text: "What represents the primary responsibility of the Data Link Layer (Layer 2) of the OSI reference model?",
    options: [
      "Routing packets across multiple independent networks",
      "Enabling reliable data transit over physical connections via framing and error detection mechanisms",
      "Encoding text structures to display interfaces",
      "Handling end-to-end user session variables"
    ],
    correctAnswer: "B",
    explanation: "The Data Link layer handles node-to-node framing, flow control, and error correction (e.g., CRC) to guarantee a reliable channel over the raw physical layer.",
    category: "OSI Layers",
    source: "OSI Reference Handbook"
  },
  {
    id: "os_q11",
    number: 11,
    text: "Why would an administrator attempt to ping the loopback address of their computer?",
    options: [
      "To test whether the external wireless card is active",
      "To verify that the local TCP/IP protocol stack is properly installed and functioning internally",
      "To measure the distance between local routers",
      "To force memory swap files to flush to disk"
    ],
    correctAnswer: "B",
    explanation: "Pinging the loopback address directs packets straight back through the software protocol tree, confirming that the network stack is correctly configured without sending external signals.",
    category: "Networks & Protocols",
    source: "Networking exit reference"
  },
  {
    id: "os_q12",
    number: 12,
    text: "What represents the loopback IP address in standard IPv6 formatting?",
    options: [
      "127.0.0.1",
      "::1",
      "fe80::1",
      "ff02::1"
    ],
    correctAnswer: "B",
    explanation: "In IPv6, the loopback address is written as ::1, which represents 127 zeroes followed by a single binary '1' (equivalent to 127.0.0.1 in IPv4 networks).",
    category: "Networks & Protocols",
    source: "Networking exit reference"
  },
  {
    id: "os_q13",
    number: 13,
    text: "What represents the standard Ethernet frame size range for most local wired network architectures?",
    options: [
      "32 bytes to 512 bytes",
      "64 bytes to 1518 bytes",
      "128 bytes to 4096 bytes",
      "1024 bytes to 65535 bytes"
    ],
    correctAnswer: "B",
    explanation: "Standard Ethernet frames must be at least 64 bytes (to ensure collision detection works) and at most 1518 bytes (excluding VLAN tags), keeping overhead and payload sizes balanced.",
    category: "Networks & Protocols",
    source: "IEEE 802.3 Standards"
  },
  {
    id: "os_q14",
    number: 14,
    text: "What is the primary architectural purpose of a Subnet Mask in network layout configurations?",
    options: [
      "To encrypt local data payloads",
      "To distinguish between the network ID portion and the host ID portion of an IP address",
      "To assign dynamic domain names to servers",
      "To routing packages to outer domains"
    ],
    correctAnswer: "B",
    explanation: "The subnet mask uses contiguous binary ones to mask out the network/subnet portion of an IP address, letting nodes calculate whether target destinations are local or remote.",
    category: "Networks & Protocols",
    source: "Networking exit reference"
  },
  {
    id: "os_q15",
    number: 15,
    text: "In OS paging systems, what distinguishes 'demand paging' from 'pre-paging' models?",
    options: [
      "Demand paging disables page caches completely",
      "Demand paging loads virtual memory pages into RAM only when they are explicitly referenced (on-demand), avoiding pre-loading overheads",
      "Demand paging loads every application page on startup",
      "Demand paging allocates variables into heap registries"
    ],
    correctAnswer: "B",
    explanation: "Demand paging retrieves pages from disk only when a page fault occurs, conserving RAM by loading solely what the application actively references.",
    category: "Memory Management",
    source: "Memory Management Syllabus"
  },
  {
    id: "os_q16",
    number: 16,
    text: "In concurrent systems, what is a 'Semaphore' tool designed to do?",
    options: [
      "To speed up integer compilation during bundling",
      "To synchronize processes, protecting shared resources from race conditions and concurrent access issues",
      "To resolve dynamic network names",
      "To clean memory leak references automatically"
    ],
    correctAnswer: "B",
    explanation: "A semaphore is an integer synchronization variable accessed via wait() and signal() calls, locking critical sections to prevent concurrent access bugs.",
    category: "Concurrency",
    source: "Deadlock study sheet"
  },
  {
    id: "os_q17",
    number: 17,
    text: "What does the system compiler helper called 'Linker' do?",
    options: [
      "It resolves domain addresses to IP coordinates",
      "It combines individual object files and libraries, resolving external references into a single unified executable build",
      "It translates high-level loops to assembly lines",
      "It monitors process swaps to disk"
    ],
    correctAnswer: "B",
    explanation: "Linkers resolve symbol and function names across separately compiled object files, mapping imports to exports to construct the final binary.",
    category: "Concurrency",
    source: "Systems Programming Syllabus"
  },
  {
    id: "os_q18",
    number: 18,
    text: "What represents the immediate result of running 'ping localhost' inside a systems shell?",
    options: [
      "It initiates a trace route through the external gates",
      "It transmits standard ICMP Echo Requests directly to the computer's loopback interface, measuring local protocol response times",
      "It reboots the main system network adapter card",
      "It sends an alert to local domain controllers"
    ],
    correctAnswer: "B",
    explanation: "pinging 'localhost' (or 127.0.0.1) tests internal network drivers. It measures local response speeds using ICMP echo cycles without touching actual external hardware.",
    category: "Networks & Protocols",
    source: "Networking exit reference"
  },
  {
    id: "os_q19",
    number: 19,
    text: "Which MAC-level coordination protocol requires network stations to listen to the communication medium to determine if it is free before transmitting data?",
    options: [
      "Token Ring passing",
      "CSMA (Carrier Sense Multiple Access)",
      "Time Division Multiplexing",
      "Frequency Hopping"
    ],
    correctAnswer: "B",
    explanation: "CSMA enforces 'listen before talk'. Stations monitor the channel carrier. If they sense traffic, they back-off to avoid collisions, maximizing packet success.",
    category: "Networks & Protocols",
    source: "IEEE 802.3 Standards"
  },
  {
    id: "os_q20",
    number: 20,
    text: "In the OSI reference model, which layer manages the character translations, data compression, and cryptographic encryption/decryption models?",
    options: [
      "Session Layer (Layer 5)",
      "Presentation Layer (Layer 6)",
      "Application Layer (Layer 7)",
      "Transport Layer (Layer 4)"
    ],
    correctAnswer: "B",
    explanation: "The Presentation Layer handles encryption/decryption, data representation translation (e.g., EBCDIC to ASCII), and compression to ensure abstract data formats match layer specifications.",
    category: "OSI Layers",
    source: "OSI Reference Handbook"
  },
  {
    id: "os_q21",
    number: 21,
    text: "Which disk scheduling algorithm offers the absolute minimum average seek time under standard random disk access queues?",
    options: [
      "First-Come, First-Served (FCFS)",
      "Shortest Seek Time First (SSTF)",
      "SCAN / Elevator Scheduling",
      "Round Robin Disk Queueing"
    ],
    correctAnswer: "B",
    explanation: "SSTF selects the pending disk request closest to the current head position, minimizing immediate disk head movement and ensuring low seek times compared to non-directional models.",
    category: "Disk Scheduling",
    source: "Operating Systems exit reference"
  },
  {
    id: "os_q22",
    number: 22,
    text: "Which page replacement algorithm suffers from Belady's Anomaly, where increasing the number of physical page frames results in an increase in page faults?",
    options: [
      "Least Recently Used (LRU)",
      "Optimal Page Replacement (OPT)",
      "First-In, First-Out (FIFO)",
      "Clock Replacement Algorithm"
    ],
    correctAnswer: "C",
    explanation: "FIFO can exhibit Belady’s anomaly because its queue doesn't possess the stack property, whereas stack-based algorithms like LRU never exhibit this anomaly.",
    category: "Memory Management",
    source: "Memory Management Syllabus"
  },
  {
    id: "os_q23",
    number: 23,
    text: "Which condition is NOT one of the four coffman conditions required for a system deadlock to occur?",
    options: [
      "Mutual Exclusion",
      "Hold and Wait",
      "Preemption",
      "Circular Wait"
    ],
    correctAnswer: "C",
    explanation: "The condition is NO preemption. If resources can be preempted, a deadlock is prevented.",
    category: "Concurrency",
    source: "Deadlock study sheet"
  },
  {
    id: "os_q24",
    number: 24,
    text: "In any modern Unix file system design, what metadata is NOT directly stored inside a standard i-node structure?",
    options: [
      "File permissions (Read, Write, Execute)",
      "File size (in bytes)",
      "The name of the file",
      "File owner UID and timestamps"
    ],
    correctAnswer: "C",
    explanation: "In Unix, directory entries map file names to i-node numbers. The file names reside in directories, not inside the i-node itself.",
    category: "File Systems",
    source: "Storage Systems reference"
  },
  {
    id: "os_q25",
    number: 25,
    text: "Which statement correctly describes the behavior of a Preemptive CPU scheduling algorithm?",
    options: [
      "Once a process starts running, it maintains control of the CPU until it voluntarily terminates or blocks for I/O",
      "The operating system can interrupt a currently running process and switch the CPU to another process based on set triggers or priorities",
      "It executes processes strictly based on chronological registration order with zero interrupts",
      "It allocates resources exclusively to dynamic memory arrays"
    ],
    correctAnswer: "B",
    explanation: "Preemptive scheduling lets the kernel pause active execution when higher priority tasks enter the queue, guaranteeing low response latency.",
    category: "CPU Scheduling",
    source: "Process Scheduling Standard"
  },
  {
    id: "os_q26",
    number: 26,
    text: "What is the primary role of the Dynamic Host Configuration Protocol (DHCP) in a network?",
    options: [
      "To resolve static domain names to dynamic IP locations",
      "To automatically allocate IP addresses, subnet masks, default gateways, and DNS coordinates to client hosts",
      "To encrypt transport-level data streams using high-level standards",
      "To route network packets across boundary domains using path vectors"
    ],
    correctAnswer: "B",
    explanation: "DHCP automates network configuration, dynamic allocation, leasing of IP credentials, and standard gateways to client machines.",
    category: "Networks & Protocols",
    source: "Networking exit reference"
  },
  {
    id: "os_q27",
    number: 27,
    text: "A network router operating at the Internet Protocol layer operates primarily at which layer of the OSI seven-layer model?",
    options: [
      "Transport Layer (Layer 4)",
      "Data Link Layer (Layer 2)",
      "Network Layer (Layer 3)",
      "Session Layer (Layer 5)"
    ],
    correctAnswer: "C",
    explanation: "Routers reside at the Network Layer, where they unpack packet headers to evaluate destination IP networks and route data paths.",
    category: "OSI Layers",
    source: "OSI Reference Handbook"
  },
  {
    id: "os_q28",
    number: 28,
    text: "Which transport-level protocol is used for applications needing faster transmission where packet loss is acceptable, offering no retransmission or handshake mechanisms?",
    options: [
      "Transmission Control Protocol (TCP)",
      "User Datagram Protocol (UDP)",
      "Hypertext Transfer Protocol (HTTP)",
      "ICMP Loopback Protocol"
    ],
    correctAnswer: "B",
    explanation: "UDP is connectionless and low overhead, making it ideal for real-time traffic like streaming or gaming where speed is favored over absolute packet reliability.",
    category: "Networks & Protocols",
    source: "Networking exit reference"
  },
  {
    id: "os_q29",
    number: 29,
    text: "In CIDR notation, how many usable host IP addresses are available in a subnet designated by the range 192.168.1.0/26?",
    options: [
      "64 addresses",
      "62 addresses",
      "30 addresses",
      "126 addresses"
    ],
    correctAnswer: "B",
    explanation: "A /26 subnet yields 2^(32-26) = 64 IP addresses. Subtracting 2 for the Network ID and Broadcast IP leaves 62 usable host addresses.",
    category: "Networks & Protocols",
    source: "Subnetting Guidebook"
  },
  {
    id: "os_q30",
    number: 30,
    text: "In virtual memory paging, what occurs immediately after a CPU references a page address that is not currently mapped into main physical memory?",
    options: [
      "The processor generates a page fault interrupt to fetch the missing page from disk",
      "The active process terminates automatically with a segmentation fault",
      "The CPU overwrites page index zero in high-speed registers",
      "The cache buffer forces a system restart"
    ],
    correctAnswer: "A",
    explanation: "A reference to an unmapped page triggers a page fault interrupt. The OS catches this exception, retrieves the page from secondary swap space into a free RAM frame, updates the page table, and restarts the instruction.",
    category: "Memory Management",
    source: "Memory Management Syllabus"
  },
  {
    id: "os_q31",
    number: 31,
    text: "In process synchronization, what does the 'Critical Section' refer to?",
    options: [
      "Code that handles uncompiled high-priority variable conversions",
      "A segment of code accessing shared resources that must not be concurrently executed by more than one process",
      "The system kernel file that boots the disk drives",
      "A secondary buffer segment tracking network interface frames"
    ],
    correctAnswer: "B",
    explanation: "The critical section is a block of code editing shared resources. Synchronizers like semaphores protect this area to prevent concurrent race conditions.",
    category: "Concurrency",
    source: "Deadlock study sheet"
  },
  {
    id: "os_q32",
    number: 32,
    text: "Which protocol is primarily used to secure communication over the web by providing server authentication and session encryption on top of TCP?",
    options: [
      "Domain Name System (DNS)",
      "Simple Mail Transfer Protocol (SMTP)",
      "HTTPS (utilizing SSL/TLS)",
      "Point-to-Point Protocol (PPP)"
    ],
    correctAnswer: "C",
    explanation: "HTTPS layers HTTP over TLS/SSL, encrypting data payloads and using digital certificates to authenticate server identities.",
    category: "Networks & Protocols",
    source: "Networking exit reference"
  },
  {
    id: "os_q33",
    number: 33,
    text: "How does the C-SCAN (Circular SCAN) disk scheduling algorithm differ from the standard SCAN algorithm?",
    options: [
      "C-SCAN moves the disk head in random routes inside the disk tracks",
      "C-SCAN only processes requests on its inward sweep, returning to the start without servicing requests on the return sweep",
      "C-SCAN processes requests purely chronologically",
      "C-SCAN is a strictly non-preemptive CPU scheduler"
    ],
    correctAnswer: "B",
    explanation: "Unlike SCAN, which reverses direction and services requests on the way back, C-SCAN immediately tracks back to the beginning of the disk without servicing requests on the return sweep, providing a more uniform wait time.",
    category: "Disk Scheduling",
    source: "Operating Systems exit reference"
  },
  {
    id: "os_q34",
    number: 34,
    text: "What is the primary objective of aging algorithms in operating system process schedulers?",
    options: [
      "To force old inactive files to compress themselves on disk",
      "To prevent starvation of low-priority processes by gradually increasing their priority over time",
      "To allocate RAM addresses sequentially based on compile timestamps",
      "To shut down long-running web requests"
    ],
    correctAnswer: "B",
    explanation: "Aging increases a process's priority the longer it sits in the ready queue, resolving process starvation bugs in Priority-based setups.",
    category: "CPU Scheduling",
    source: "Process Scheduling Standard"
  },
  {
    id: "os_q35",
    number: 35,
    text: "Which layer of the OSI model determines the optimal routing pathway for packets using dynamic routing protocols like OSPF or BGP?",
    options: [
      "Transport Layer (Layer 4)",
      "Network Layer (Layer 3)",
      "Session Layer (Layer 5)",
      "Data Link Layer (Layer 2)"
    ],
    correctAnswer: "B",
    explanation: "The Network Layer operates in terms of routing protocols like OSPF, BGP, and RIP. It defines path algorithms to steer packets across interconnecting nodes.",
    category: "OSI Layers",
    source: "OSI Reference Handbook"
  },
  {
    id: "os_q36",
    number: 36,
    text: "What physical memory layout limitation does the Segmentation memory management technique address?",
    options: [
      "It completely removes internal and external memory page leaks",
      "It models memory to match the user's/programmer's logical view of a program (segments like main, stack, objects) rather than linear blocks",
      "It bypasses physical disk controllers to optimize swap files",
      "It forces compiler optimization on high-speed registers"
    ],
    correctAnswer: "B",
    explanation: "Segmentation splits a program's virtual address space into variable-sized, logically cohesive segments (e.g., code, stack, heap), mapping them directly to physical memory blocks.",
    category: "Memory Management",
    source: "Memory Management Syllabus"
  },
  {
    id: "os_q37",
    number: 37,
    text: "What core condition is avoided if a system enforces Peterson's Solution for process synchronization?",
    options: [
      "External compilation exceptions",
      "Race conditions, ensuring strict mutual exclusion in critical sections",
      "Hardware disk sector failure",
      "Virtual address page faults"
    ],
    correctAnswer: "B",
    explanation: "Peterson's Solution is a classic software-based synchronization algorithm for two processes that ensures mutual exclusion, progress, and bounded waiting.",
    category: "Concurrency",
    source: "Deadlock study sheet"
  },
  {
    id: "os_q38",
    number: 38,
    text: "In IP routing, what is the purpose of the TTL (Time to Live) field in the IPv4 packet header?",
    options: [
      "To specify when the network packet should be archived",
      "To prevent packets from looping endlessly in the network by decrementing the value at each router hop and discarding the packet when it hits zero",
      "To measure network connection bandwidth",
      "To define the session duration limit"
    ],
    correctAnswer: "B",
    explanation: "Routers decrement the TTL field by 1 upon receiving a packet. If TTL hits zero, the router drops the packet and sends an ICMP 'Time Exceeded' message, preventing endless routing loops.",
    category: "Networks & Protocols",
    source: "Networking exit reference"
  },
  {
    id: "os_q41",
    number: 39,
    text: "Which IP addressing practice allows multiple devices inside a private local network to share a single public IP address for internet communication?",
    options: [
      "Domain Name System (DNS)",
      "Network Address Translation (NAT)",
      "Address Resolution Protocol (ARP)",
      "Border Gateway Protocol (BGP)"
    ],
    correctAnswer: "B",
    explanation: "NAT translates private internal IP addresses to a shared public IP address (often mapping ports via PAT/NAT overloading) for external communication.",
    category: "Networks & Protocols",
    source: "Networking exit reference"
  },
  {
    id: "os_q40",
    number: 40,
    text: "Which file allocation method is most susceptible to external fragmentation and requires knowing the final file size at the time of creation?",
    options: [
      "Contiguous Allocation",
      "Linked Allocation",
      "Indexed Allocation",
      "File Allocation Table (FAT)"
    ],
    correctAnswer: "A",
    explanation: "Contiguous allocation places a file in adjacent physical disk blocks. It creates external fragmentation as files are deleted and cannot grow easily if adjacent sectors are occupied.",
    category: "File Systems",
    source: "Storage Systems reference"
  },
  {
    id: "os_q41_con",
    number: 41,
    text: "What is the primary difference between a process and a thread inside an operating system?",
    options: [
      "A process can run asynchronously whereas a thread is strictly synchronous",
      "Processes represent independent program executions with individual address spaces, while threads of a single process share the parent's memory address space",
      "Threads can bypass kernel control completely",
      "Processes are managed by compilers while threads are run by physical routers"
    ],
    correctAnswer: "B",
    explanation: "A process has its own isolated memory, code segment, and registers. Accessing other processes requires IPC. Threads are lightweight subdivisions that share the parent process's memory and resources directly.",
    category: "Concurrency",
    source: "Deadlock study sheet"
  },
  {
    id: "os_q42",
    number: 42,
    text: "Which protocol is responsible for establishing, managing, and terminating sessions between applications at Layer 5 of the OSI model?",
    options: [
      "TCP (Layer 4)",
      "NetBIOS / Session Protocols",
      "UDP (Layer 4)",
      "IP (Layer 3)"
    ],
    correctAnswer: "B",
    explanation: "Layer 5 is the Session layer, responsible for session checkpoints, setup, and teardown, as implemented by NetBIOS or RPC socket handshakes.",
    category: "OSI Layers",
    source: "OSI Reference Handbook"
  },
  {
    id: "os_q43",
    number: 43,
    text: "Which command-line diagnostic tool is designed to trace the actual path of routers taken by a packet on its way to a remote host?",
    options: [
      "hostname",
      "traceroute / tracert",
      "netstat",
      "ipconfig / ifconfig"
    ],
    correctAnswer: "B",
    explanation: "traceroute sends successive packets with increasing TTL values, collecting ICMP 'Time Exceeded' messages from intermediate routers to trace and log the pathway.",
    category: "Networks & Protocols",
    source: "Networking exit reference"
  },
  {
    id: "os_q44",
    number: 44,
    text: "What is a major drawback of the Round-Robin (RR) scheduling algorithm when the time quantum is set to an excessively small duration?",
    options: [
      "Low process priority responsiveness",
      "High context-switching overhead, causing CPU cycles to be wasted on kernel house-keeping",
      "Extreme susceptibility to indefinite process starvation",
      "Failure of disk cache buffers"
    ],
    correctAnswer: "B",
    explanation: "If the scheduling quantum is extremely small, the active CPU wastes immense performance on saving and loading process states (context-switching overhead) rather than executing useful software operations.",
    category: "CPU Scheduling",
    source: "Process Scheduling Standard"
  },
  {
    id: "os_q45",
    number: 45,
    text: "In virtual memory systems, how does the page-table 'TLB' (Translation Lookaside Buffer) accelerate address translations?",
    options: [
      "By storing the entire secondary swap file on a solid-state disk",
      "By caching recently accessed virtual-to-physical address mappings in a high-speed associative hardware cache",
      "By compiling high-speed assembly instructions during standard execution",
      "By disabling page fault exceptions in physical RAM"
    ],
    correctAnswer: "B",
    explanation: "The TLB is a dedicated on-chip memory cache. It searches virtual page mappings in parallel in a single cycle, allowing translation without querying the main page table in RAM.",
    category: "Memory Management",
    source: "Memory Management Syllabus"
  }
];

