from reportlab.lib import colors
from reportlab.lib.enums import TA_RIGHT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.platypus import (
    HRFlowable,
    ListFlowable,
    ListItem,
    PageBreak,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
    Table,
    TableStyle,
)


OUTPUT_PATH = "public/cv.pdf"


def bullet_list(items, style):
    return ListFlowable(
        [ListItem(Paragraph(i, style), leftIndent=8) for i in items],
        bulletType="bullet",
        start="circle",
        bulletFontSize=6,
        bulletOffsetY=2,
        leftIndent=10,
        spaceBefore=2,
        spaceAfter=4,
    )


def section_title(text, style):
    return [Spacer(1, 4), Paragraph(text, style), Spacer(1, 3)]


def main():
    doc = SimpleDocTemplate(
        OUTPUT_PATH,
        pagesize=A4,
        leftMargin=18 * mm,
        rightMargin=18 * mm,
        topMargin=14 * mm,
        bottomMargin=14 * mm,
        title="Chinmay Patil - CV",
        author="Chinmay Patil",
    )

    styles = getSampleStyleSheet()
    name_style = ParagraphStyle(
        "Name",
        parent=styles["Heading1"],
        fontName="Helvetica-Bold",
        fontSize=20,
        leading=24,
        textColor=colors.HexColor("#0f172a"),
        spaceAfter=2,
    )
    role_style = ParagraphStyle(
        "Role",
        parent=styles["Normal"],
        fontSize=10.5,
        leading=14,
        textColor=colors.HexColor("#1d4ed8"),
    )
    meta_style = ParagraphStyle(
        "Meta",
        parent=styles["Normal"],
        fontSize=9,
        leading=12,
        textColor=colors.HexColor("#334155"),
    )
    section_style = ParagraphStyle(
        "Section",
        parent=styles["Heading2"],
        fontSize=10,
        leading=12,
        textColor=colors.HexColor("#1e3a8a"),
        fontName="Helvetica-Bold",
        spaceBefore=3,
    )
    body_style = ParagraphStyle(
        "Body",
        parent=styles["Normal"],
        fontSize=9.3,
        leading=13,
        textColor=colors.HexColor("#0f172a"),
    )
    muted_style = ParagraphStyle(
        "Muted",
        parent=body_style,
        textColor=colors.HexColor("#475569"),
    )
    small_right = ParagraphStyle(
        "SmallRight",
        parent=meta_style,
        alignment=TA_RIGHT,
    )

    story = []

    story.append(Paragraph("Chinmay Patil", name_style))
    story.append(
        Paragraph(
            "Computer Science Engineer | Secure Systems, Applied AI, Web3 Product Engineering",
            role_style,
        )
    )
    story.append(Spacer(1, 5))

    header_table = Table(
        [
            [
                Paragraph(
                    "Bengaluru, India<br/>thechinmay07@gmail.com<br/>chinmay.io",
                    meta_style,
                ),
                Paragraph(
                    "LinkedIn: linkedin.com/in/thechinmay07<br/>GitHub: github.com/0xali3n<br/>X: x.com/Chinmay_io",
                    small_right,
                ),
            ]
        ],
        colWidths=[85 * mm, 85 * mm],
    )
    header_table.setStyle(
        TableStyle(
            [
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("LEFTPADDING", (0, 0), (-1, -1), 0),
                ("RIGHTPADDING", (0, 0), (-1, -1), 0),
                ("TOPPADDING", (0, 0), (-1, -1), 0),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
            ]
        )
    )
    story.append(header_table)
    story.append(Spacer(1, 5))
    story.append(HRFlowable(width="100%", color=colors.HexColor("#cbd5e1"), thickness=0.7))

    story += section_title("PROFILE", section_style)
    story.append(
        Paragraph(
            "Full-stack engineer building reliable software across AI-assisted interfaces, secure backend systems, and blockchain products. "
            "I focus on production-minded architecture, measurable user impact, and clear technical documentation. "
            "Targeting Germany-based Master's opportunities and software internships/jobs with strong engineering depth.",
            body_style,
        )
    )

    story += section_title("EXPERIENCE", section_style)
    story.append(Paragraph("<b>Anthe Labs Pvt. Ltd. — Co-Founder</b> | 2025 — Present", body_style))
    story.append(Paragraph("Bengaluru, India", muted_style))
    story.append(
        bullet_list(
            [
                "Co-founded and scaled Anthe from hackathon prototype to registered startup, leading a 5-member cross-functional team.",
                "Architected core Aptos-based social trading flows: real-time copy execution, wallet transparency, and risk analytics.",
                "Owned end-to-end roadmap across smart contract features, growth experiments, and product delivery.",
            ],
            body_style,
        )
    )
    story.append(Paragraph("<b>Pravinya Infotech — Intern, Full Stack ML Developer</b> | Jan 2025 — May 2025", body_style))
    story.append(Paragraph("Hubballi, Karnataka, India", muted_style))
    story.append(
        bullet_list(
            [
                "Built AdGenAI using React + Flask + MongoDB to automate campaign poster and ad generation workflows.",
                "Integrated Gemini and Imagen 3 APIs for prompt-driven creative generation from raw product assets.",
                "Implemented cloud asset handling with AWS S3 and resilient API error management for team use.",
            ],
            body_style,
        )
    )

    story += section_title("EDUCATION", section_style)
    story.append(
        Paragraph(
            "<b>Bachelor of Technology (B.Tech), Computer Science</b> — KLE Technological University",
            body_style,
        )
    )
    story.append(
        Paragraph(
            "Focus: secure systems, software engineering, data structures & algorithms, applied AI.",
            muted_style,
        )
    )

    story += section_title("LANGUAGES", section_style)
    story.append(
        Paragraph(
            "English: Full Professional Proficiency (IELTS B2) | German: A1 (actively learning, targeting A2 by Winter 2026) | "
            "Kannada: Professional working proficiency | Hindi: Professional working proficiency",
            body_style,
        )
    )

    story.append(PageBreak())

    story += section_title("SELECTED PROJECTS", section_style)
    projects = [
        (
            "AdGenAI — AI Powered Advertisement and Poster Generator",
            [
                "Built prompt-to-poster pipeline integrating Gemini AI + Imagen 3 for fast campaign variant generation.",
                "Implemented reusable asset storage flow with Amazon S3 and practical team-oriented review workflow.",
            ],
        ),
        (
            "W3Chat.io — AI Agent for Web3 Actions",
            [
                "Built conversational interface to execute transfers, swaps, bridges, and automation triggers across chains.",
                "Integrated AgentKit/OnchainKit approach for practical wallet actions with simplified UX.",
            ],
        ),
        (
            "Zory — Web3 Social Platform on VeryChain",
            [
                "Delivered connected social feed + quest + reward loops with gasless-style interaction paths.",
                "Maintained contract-aware accounting for reward and token operations.",
            ],
        ),
        (
            "CryptoLuck Casino",
            [
                "Implemented privacy-first casino prototype with provably fair logic and wallet-based payout patterns.",
                "Shipped multiple game loops with fast onboarding design for global users.",
            ],
        ),
        (
            "ZeroTrace — Encrypted Messaging DApp",
            [
                "Architected Rust/Actix backend for secure messaging state handling and protocol-aligned transitions.",
                "Designed swap-ready interfaces for advanced cryptographic module integration.",
            ],
        ),
        (
            "Hand-controlled maze — gyroscope & Arduino (Prayog Varsh 2022)",
            [
                "Built a dual-axis maze platform driven by orthogonal servos with gyroscope input and Arduino control for real-time X/Y motion.",
                "Showcased at KLE Technological University as part of the first-year engineering exploration programme.",
            ],
        ),
    ]
    for title, bullets in projects:
        story.append(Paragraph(f"<b>{title}</b>", body_style))
        story.append(bullet_list(bullets, body_style))

    story += section_title("COMPETITIONS & ACHIEVEMENTS", section_style)
    achievements = [
        "VERY Hackathon (Winner, $1,000) — Zory on VeryChain.",
        "Build on Aptos Hackathon (2nd runner-up, $1,500) — Copy-trading flow using Decibel infrastructure.",
        "CTRL+MOVE Hackathon (Bounty Winner, $2,500) — Social Trade for Kana Perps track.",
        "Supra Movers Hackathon (3rd place, $2,000) — SupraScan explorer and API flow.",
        "Hacker House Goa (1st, Diamante track, $3,000) — CryptoLuck casino prototype.",
        "DevHack 2023 (Runner-up $1,500 + Side Track $1,200) — DeFiChain.in learning and governance flow.",
        "Smart India Hackathon 2023 Grand Finale — de-anonymisation product for monitoring illicit cryptocurrency activity (NTRO track).",
        "Overall: $12,700+ prize pool, 8+ wins/podiums, 20+ hackathons entered.",
    ]
    story.append(bullet_list(achievements, body_style))

    story += section_title("TECHNICAL SKILLS", section_style)
    skill_rows = [
        ("Languages", "C, C++, Python, JavaScript, TypeScript"),
        ("Web & Frameworks", "Next.js, React, Node.js, Flask, Tailwind CSS, Postman"),
        ("Blockchain", "Solidity, Aptos, Sui, DeFi, DAO, On-chain analysis"),
        ("Cybersecurity", "Kali Linux, Nmap, Burp Suite, Metasploit, Hydra, eJPT (INE)"),
        ("Foundations", "Computer Networks, OOP, DSA, MongoDB"),
    ]
    for key, value in skill_rows:
        story.append(Paragraph(f"<b>{key}:</b> {value}", body_style))

    story += section_title("LINKS", section_style)
    story.append(
        Paragraph(
            "Portfolio: https://chinmay.io | GitHub: https://github.com/0xali3n | "
            "LinkedIn: https://www.linkedin.com/in/thechinmay07 | Devfolio: https://devfolio.co/@Chinmay_io",
            body_style,
        )
    )

    doc.build(story)
    print(f"Generated {OUTPUT_PATH}")


if __name__ == "__main__":
    main()
