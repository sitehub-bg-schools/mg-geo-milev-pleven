# Document migration manifest — mg-geo-milev-pleven

**Why this file exists.** The reference site (pleven-mg.com) hosts many real
documents (budget reports, procurement, COVID/parents info, project info).
Decision (2026-05-30): these will **not** be hardcoded into pages. They belong
in a future **self-hosted document management system (DMS)** — see
`CONTENT-INVENTORY.md` and the project memory. Until the DMS exists, the
document pages stay as honest placeholders.

This file is the **source inventory** harvested from the reference site so that
research isn't lost and the eventual migration has a checklist. **Do not** treat
these URLs as final asset locations — they live on the old site and must be
self-hosted (downloaded into our own storage) at migration time.

## Observed document hosts (verify per-file at migration)

- `https://www.pleven-mg.com/images/…` — most budget files (relative `/images/…`)
- `https://sjoomla.pleven-mg.com/images/2024/documentsmg/…` — confirmed host of
  the sample PDF (`Pravila_merki2021-22.pdf`); likely the canonical file mirror
- `https://pleven-mg.com/images/files/pdf/documents/…` — procurement protocol
- `/media/attachments/…` — at least one budget PDF (different storage path)

Base domain (www vs sjoomla) is inconsistent — resolve each URL before download.

## Проекти

| Title | Link |
|---|---|
| Равен достъп до училищно образование в условията на кризи — Проект BG05M2OP001-5.001-0001 (ОП НОИР 2014-2020, ЕС/ЕСИФ) | https://www.mon.bg/bg/100925 |

Project goal (verbatim): „Основна цел на проекта е да не се допусне прекъсване
на образователния процес и приобщаващото образование в условията на кризи, да
се осигурят условия за ефективност на образованието, да се противодейства на
риска от отпадане в ситуация на обучение от разстояние."

## Олимпиади (Новини → Олимпиади)

A documents/results hub under news: a national-round programme plus олимпиади
schedules and result protocols. Narrative items (7 лауреати по физика; Плевен
домакин на националния кръг по физика, 24–26 април 2026) are news; the files
below are DMS material.

| Document | Date | Path |
|---|---|---|
| Предварителна програма за национален кръг на олимпиадата по физика | 24–26.04.2026 | /images/2026/novini/nof/programa_nof_pleven2026.pdf |
| График за провеждане на ученическите олимпиади 2025–2026 | 26.08.2025 | /images/2025-26/documents/zap2075-grafik-uchenicheski-olimpiadi26082025.pdf |
| Протокол — Математика IV–VI клас | 2026 | /media/attachments/2026/02/16/protokoli_mat.xlsx |
| Протокол — областен кръг (математика) | 2026 | /media/attachments/2026/03/20/rezultom.docx |
| Протокол — окончателни резултати (математика) | 2026 | /images/2026/olimpiadi/okonchatelni_rezultsmo.docx |
| Протокол — Лингвистика V–VII клас | 2026 | /media/attachments/2026/02/16/lingvistika.xlsx |
| Протокол — Лингвистика, областен кръг | 2026 | /images/2026/olimpiadi/oblastenlingv.docx |
| Протокол — Лингвистика, окончателни резултати | 2026 | /images/2026/olimpiadi/okonchatelnilingv.docx |

## Профил на купувача (ЗОП)

Section headers on the reference: Обща информация · Правила за възлагане на
обществени поръчки · Предварителни обявления · Процедури по ЗОП · Обяви ·
Публични покани · Сключени договори по реда на ЗОП. (Modern procurement is
centralised in ЦАИС ЕОП — these are legacy entries.)

| Document | Date | Path |
|---|---|---|
| Доставка и монтаж на обзавеждане за кабинети в МГ „Гео Милев" | 26.06.2018 | /index.php/2025-01-06-16-12-10/2-uncategorised/42-files-download.html |
| Протокол на комисията — обзавеждане на кабинети | 27.07.2018 | /images/files/pdf/documents/files_download/Protokol_27072018.pdf |

## COVID-19 / Информация за родители

| Document | URL |
|---|---|
| Правила и мерки 2021-22 | https://sjoomla.pleven-mg.com/images/2024/documentsmg/Pravila_merki2021-22.pdf |
| Безопасност в мрежата (ДАЗД 2020) | https://sacp.government.bg/sites/default/files/SafeNet_DAZD2020.pdf |
| Готови ли сме за учебната година? | https://drive.google.com/file/d/19FPprH5evfjvAOG3q48QtgWmod6u1kBM/view |

## Обществен съвет

No documents and no member names published on the reference (only „Обществен
съвет, уч. 2024/2025г."). Needs the actual council roster from the school.

## Бюджет

~45 files, 2019–2026. Paths as harvested (relative unless absolute). Reverse
chronological.

| Period | Label | Path |
|---|---|---|
| 31.03.2026 | Изпълнение на бюджета (xlsx) | /images/2026/documents/izpalnenie_budjet_31032026.xlsx |
| 31.12.2025 | Изпълнение на бюджета | /images/2025-26/documents/izpalnenie_budjet_31122025.pdf |
| 30.09.2025 | Изпълнение на бюджета | /images/2025-26/documents/budjet092025.pdf |
| 30.06.2025 | Изпълнение на бюджета | /images/2024/documentsmg/budzet/izpalnenie_budjet_06.2025.pdf |
| 31.03.2025 | Изпълнение на бюджета | /images/2024/documentsmg/budzet/izpalnenie_budjet_31032025.pdf |
| 2025 | Бюджет на МГ „Гео Милев" 2025 | /media/attachments/2025/06/13/budget2025.pdf |
| 31.12.2024 | Изпълнение на бюджета | /images/2024/documentsmg/budzet/Izpalnenie_Budjet_31122024_MG_Geo_-Milev.pdf |
| 30.09.2024 | Изпълнение на бюджета | /images/2024/documentsmg/budzet/Izpalnenie_Budjet_30092024_MG_Geo_Milev.pdf |
| 30.06.2024 | Изпълнение на бюджета | /images/2024/documentsmg/budzet/Izpalnenie_Budjet_30062024.pdf |
| 30.06.2024 | Отчет за изпълнение на бюджета | /images/2024/documentsmg/budzet/Inf.izp.budjet_06.2024.pdf |
| 31.03.2024 | Изпълнение на бюджета | /images/2024/documentsmg/budzet/Budjet_310324.pdf |
| 31.03.2024 | Отчет за изпълнение на бюджета | /images/2024/documentsmg/budzet/Inf.izp.budjet_03.2024.pdf |
| 2023 (год.) | Бюджет на МГ „Гео Милев" | /images/2024/documentsmg/budzet/budjet_2024.pdf |
| 30.09.2023 | Изпълнение на бюджета | /images/2024/documentsmg/budzet/Izpalnenie_Budjet_30092023.pdf |
| 30.06.2023 | Отчет за изпълнение на бюджета | /images/2024/documentsmg/budzet/razhodi_06.2023.pdf |
| 30.06.2023 | Изпълнение на бюджета | /images/2024/documentsmg/budzet/inf_budjet_06.23.pdf |
| 31.03.2023 | Отчет за изпълнение на бюджета | /images/2024/documentsmg/budzet/Izpalnenie_budjet_03.2023.pdf |
| 31.03.2023 | Изпълнение на бюджета | /images/2024/documentsmg/budzet/Inf.izp.budjet_03.2023.pdf |
| 31.12.2022 | Изпълнение / отчет на бюджета | /images/2024/documentsmg/budzet/inf_izp.budjet12-2022.pdf |
| 30.09.2022 | Изпълнение на бюджета | /images/2024/documentsmg/budzet/Izpalnenie_Budjet_30092022.pdf |
| 30.06.2022 | Отчет за изпълнение на бюджета | /images/2024/documentsmg/budzet/Inf.izp.budjet_06.2022.pdf |
| 30.06.2022 | Изпълнение на бюджета | /images/2024/documentsmg/budzet/Izpalnenie-_Budjet_310322.pdf |
| 31.03.2022 | Отчет за изпълнение на бюджета | /images/2024/documentsmg/budzet/Inf.izp.budjet_03.2022.pdf |
| 31.12.2021 | Отчет за изпълнение на бюджета | /images/2024/documentsmg/budzet/inf_izp.budjet_12.2021.pdf |
| 30.09.2021 | Изпълнение на бюджета | /images/2024/documentsmg/budzet/Budjet_30092021.pdf |
| 30.06.2021 | Отчет за изпълнение на бюджета | /images/2024/documentsmg/budzet/Inf.izp.budjet_06.2021.pdf |
| 30.06.2021 | Изпълнение на бюджета | /images/2024/documentsmg/budzet/Budjet_30062021.pdf |
| 31.03.2021 | Отчет за изпълнение на бюджета | /images/2024/documentsmg/budzet/Inf.izp.budjet_03.2021.pdf |
| 31.03.2021 | Изпълнение на бюджета | /images/2024/documentsmg/budzet/Izpalnenie_Budjet_31032021.pdf |
| 2021 | Утвърден бюджет | /images/2024/documentsmg/budzet/utvyrden_2020.pdf |
| 2020 | Информация за изпълнение на бюджета | /images/2024/documentsmg/budzet/izp.bugjet.pdf |
| 31.12.2020 | Изпълнение на бюджета | /images/2024/documentsmg/budzet/izpalnenie-_budjet_311220.pdf |
| 30.09.2020 | Изпълнение на бюджета | /images/2024/documentsmg/budzet/budget09.2020.pdf |
| 01.10.2020 | Информация за изпълнение на бюджета | /images/2024/documentsmg/budzet/info_budget09.2020.pdf |
| 30.06.2020 | Изпълнение на бюджета | /images/2024/documentsmg/budzet/budget_MG_30062020.pdf |
| 30.06.2020 | Информация за изпълнение на бюджета | /images/2024/documentsmg/budzet/info_budget06.2020.pdf |
| 31.03.2020 | Изпълнение на бюджета | /images/2024/documentsmg/budzet/budget_MG_31032020.pdf |
| 31.03.2020 | Информация за изпълнение на бюджета | /images/2024/documentsmg/budzet/info_budget03.2020.pdf |
| 30.09.2019 | Изпълнение на бюджета | /images/2024/documentsmg/budzet/BUDJET_09_2019.pdf |
| 30.06.2019 | Изпълнение на бюджета | /images/2024/documentsmg/budzet/BUDGET_062019.pdf |
| 31.03.2019 | Изпълнение на бюджета | /images/2024/documentsmg/budzet/BUDGET_032019.pdf |

> Note: a few rows on the reference share a path (duplicate links) and some
> period labels look inconsistent (e.g. a „31.03.2022" row pointing at a
> `310322` file labelled 30.06.2022). Clean up during migration.
