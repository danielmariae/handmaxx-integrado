import { Component, OnInit } from '@angular/core';
import { TreinoService } from 'src/app/services/treino.service';
import { ModalController } from '@ionic/angular';
import { FrequenciaTreinoPage } from './frequencia-treino/frequencia-treino.page';
import { ErrorHandlingService } from 'src/app/services/error-handling.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-frequencia',
  templateUrl: './frequencia.page.html',
  styleUrls: ['./frequencia.page.scss'],
})
export class FrequenciaPage implements OnInit {
  treinos: any[] = [];

  constructor(
    private treinoService: TreinoService,
    private modalController: ModalController,
    private errorHandlingService: ErrorHandlingService,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.carregarTreinos();
  }

  carregarTreinos(): void {
    this.treinoService.findAll().subscribe({
      next: (data) => (this.treinos = data),
      error: (err) => {
        console.error('Erro ao carregar treinos:', err);
        const errorMessage = this.errorHandlingService.handleError(err);
        this.toastService.ativarToast(errorMessage);
      }
    });
  }

  async abrirFrequenciaTreinoModal(treinoId: number): Promise<void> {
    const modal = await this.modalController.create({
      component: FrequenciaTreinoPage,
      componentProps: { treinoId },
    });

    await modal.present();
  }
}
