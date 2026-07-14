// Seeing Culture Benchmark leaderboard.
// Values are two-stage zero-shot results: Acc = multiple-choice VQA accuracy (%),
// mIoU = mean Intersection over Union of the grounded region, evaluated with
// bounding boxes on questions answered correctly in stage 1.
// Seed rows transcribed verbatim from Table 2 of the paper (arXiv:2509.16517).
// To add a result: append a row and open a pull request, or email the maintainer.
// "miou" value null means the model cannot produce box/segment grounding.
scb_leaderboard = [
  {"model": "GPT-o3",          "group": "Closed", "t1_acc": 73.69, "t1_miou": 31.10, "t2_acc": 91.13, "t2_miou": 32.50, "t3_acc": 88.23, "t3_miou": 31.69, "acc": 85.15, "miou": 31.78, "date": "2025-11", "source": "https://aclanthology.org/2025.emnlp-main.1131/"},
  {"model": "Gemini-2.5-Pro",  "group": "Closed", "t1_acc": 71.07, "t1_miou": 16.56, "t2_acc": 90.17, "t2_miou": 16.67, "t3_acc": 85.44, "t3_miou": 15.79, "acc": 82.88, "miou": 16.22, "date": "2025-11", "source": "https://aclanthology.org/2025.emnlp-main.1131/"},
  {"model": "GPT-4.1",         "group": "Closed", "t1_acc": 68.33, "t1_miou": 13.31, "t2_acc": 90.17, "t2_miou": 14.32, "t3_acc": 85.04, "t3_miou": 13.60, "acc": 81.97, "miou": 13.74, "date": "2025-11", "source": "https://aclanthology.org/2025.emnlp-main.1131/"},
  {"model": "Qwen2.5-VL-7B",   "group": "Open",   "t1_acc": 44.17, "t1_miou": 44.90, "t2_acc": 61.51, "t2_miou": 48.22, "t3_acc": 54.85, "t3_miou": 47.60, "acc": 53.78, "miou": 47.20, "date": "2025-11", "source": "https://aclanthology.org/2025.emnlp-main.1131/"},
  {"model": "InternVL2.5-4B",  "group": "Open",   "t1_acc": 30.83, "t1_miou": 28.37, "t2_acc": 30.34, "t2_miou": 28.88, "t3_acc": 32.18, "t3_miou": 28.49, "acc": 31.34, "miou": 28.56, "date": "2025-11", "source": "https://aclanthology.org/2025.emnlp-main.1131/"},
  {"model": "MiniCPM-2.6",     "group": "Open",   "t1_acc": 28.33, "t1_miou": null,  "t2_acc": 34.65, "t2_miou": null,  "t3_acc": 32.85, "t3_miou": null,  "acc": 32.13, "miou": null,  "date": "2025-11", "source": "https://aclanthology.org/2025.emnlp-main.1131/"},
  {"model": "LLaVA-Onevision", "group": "Open",   "t1_acc": 26.43, "t1_miou": null,  "t2_acc": 25.18, "t2_miou": null,  "t3_acc": 23.47, "t3_miou": null,  "acc": 24.70, "miou": null,  "date": "2025-11", "source": "https://aclanthology.org/2025.emnlp-main.1131/"},
  {"model": "Llama-3.2",       "group": "Open",   "t1_acc": 23.57, "t1_miou": null,  "t2_acc": 25.66, "t2_miou": null,  "t3_acc": 23.80, "t3_miou": null,  "acc": 24.23, "miou": null,  "date": "2025-11", "source": "https://aclanthology.org/2025.emnlp-main.1131/"},
  {"model": "Idefics2",        "group": "Open",   "t1_acc": 13.21, "t1_miou": 0.19,  "t2_acc": 11.03, "t2_miou": 0.05,  "t3_acc": 12.30, "t3_miou": 0.18,  "acc": 12.21, "miou": 0.15,  "date": "2025-11", "source": "https://aclanthology.org/2025.emnlp-main.1131/"},
  {"model": "InstructBLIP",    "group": "Open",   "t1_acc": 11.07, "t1_miou": null,  "t2_acc": 10.31, "t2_miou": null,  "t3_acc": 11.04, "t3_miou": null,  "acc": 10.86, "miou": null,  "date": "2025-11", "source": "https://aclanthology.org/2025.emnlp-main.1131/"}
];
