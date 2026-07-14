import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';

function LegalLayout({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="legal-page">
      <div className="legal-nav">
        <Link to="/" className="legal-back">← Retour au site</Link>
      </div>
      <div className="container legal-container">
        <h1 className="legal-h1 fd">{title}</h1>
        <p className="legal-updated">Dernière mise à jour : 14 juillet 2026</p>
        <div className="legal-body">{children}</div>
      </div>
    </div>
  );
}

export function MentionsLegales() {
  return (
    <LegalLayout title="Mentions légales">
      <h2>Éditeur du site</h2>
      <p>
        Ouakan Solutions — Mohamed Ouakan, entrepreneur individuel (micro-entreprise)<br />
        Adresse : 2 Rue Garibaldi, 76620 Le Havre, France<br />
        SIRET : 106 204 662 00014<br />
        TVA non applicable, article 293 B du Code général des impôts<br />
        Email : ouakan.solutions@gmail.com<br />
        Téléphone : 07 66 47 91 60<br />
        Directeur de la publication : Mohamed Ouakan
      </p>

      <h2>Hébergement</h2>
      <p>
        Ce site est hébergé par Netlify, Inc. (San Francisco, États-Unis) — netlify.com.
      </p>

      <h2>Propriété intellectuelle</h2>
      <p>
        L'ensemble des contenus de ce site (textes, graphismes, logo) est la propriété de Ouakan Solutions,
        sauf mention contraire. Toute reproduction ou représentation, totale ou partielle, sans autorisation
        préalable, est interdite.
      </p>

      <h2>Responsabilité</h2>
      <p>
        Ouakan Solutions s'efforce d'assurer l'exactitude des informations diffusées sur ce site, sans garantir
        qu'elles soient exemptes d'erreurs. L'éditeur ne saurait être tenu responsable des dommages directs ou
        indirects résultant de l'accès ou de l'usage de ce site.
      </p>
    </LegalLayout>
  );
}

export function PolitiqueConfidentialite() {
  return (
    <LegalLayout title="Politique de confidentialité">
      <h2>Responsable de traitement</h2>
      <p>
        Mohamed Ouakan — Ouakan Solutions, 2 Rue Garibaldi, 76620 Le Havre.
        Contact : ouakan.solutions@gmail.com.
      </p>

      <h2>Données collectées</h2>
      <p>
        Via le formulaire de prise de rendez-vous et l'assistant conversationnel du site, nous collectons :
        nom, email, téléphone, entreprise (facultatif), nature du besoin, message (facultatif) et créneau
        de rendez-vous choisi.
      </p>

      <h2>Finalités</h2>
      <p>
        Ces données sont utilisées exclusivement pour traiter votre demande de rendez-vous ou de contact,
        vous recontacter, et le cas échéant vous proposer un devis. Aucune donnée n'est utilisée à des fins
        de revente ou de partage avec des tiers non mentionnés ci-dessous.
      </p>

      <h2>Destinataires et sous-traitants</h2>
      <p>
        Les données sont accessibles uniquement à Mohamed Ouakan et aux prestataires techniques suivants,
        nécessaires au fonctionnement du site :
      </p>
      <ul>
        <li><b>Web3Forms</b> — acheminement des formulaires par email</li>
        <li><b>Netlify</b> — hébergement du site</li>
        <li><b>Google</b> — uniquement si vous y consentez, mesure d'audience (Google Analytics)</li>
      </ul>
      <p>
        Les polices de caractères utilisées sur ce site sont auto-hébergées : aucune requête n'est envoyée à
        Google pour leur affichage.
      </p>
      <p>
        Ces prestataires peuvent traiter des données depuis des infrastructures situées hors de l'Union
        européenne. Dans ce cas, ils s'engagent contractuellement à respecter des garanties reconnues par le
        RGPD (clauses contractuelles types) pour tout transfert de données.
      </p>

      <h2>Durée de conservation</h2>
      <p>
        3 ans à compter du dernier contact pour les demandes qui n'aboutissent pas à une mission. Pour les
        clients, la durée de la relation commerciale, augmentée des durées légales de conservation des
        documents comptables (10 ans).
      </p>

      <h2>Cookies</h2>
      <p>
        Voir notre <Link to="/cookies">politique de cookies</Link> pour le détail des cookies utilisés et la
        gestion de votre consentement.
      </p>

      <h2>Vos droits</h2>
      <p>
        Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, d'effacement, de limitation,
        d'opposition et de portabilité de vos données. Vous pouvez exercer ces droits en écrivant à
        ouakan.solutions@gmail.com. Vous disposez également du droit d'introduire une réclamation auprès de
        la CNIL (cnil.fr).
      </p>
    </LegalLayout>
  );
}

export function CGV() {
  return (
    <LegalLayout title="Conditions générales de vente">
      <h2>Article 1 — Objet</h2>
      <p>
        Les présentes conditions régissent les prestations de conseil, développement d'agents IA,
        automatisation de processus, data & reporting et applications métier fournies par Ouakan Solutions
        (Mohamed Ouakan, micro-entreprise) à ses clients professionnels.
      </p>

      <h2>Article 2 — Devis et commande</h2>
      <p>
        Chaque prestation fait l'objet d'un devis gratuit détaillant le périmètre, le prix et les délais
        indicatifs. La commande est considérée comme ferme après acceptation écrite du devis par le client
        (signature ou validation par email).
      </p>

      <h2>Article 3 — Prix et paiement</h2>
      <p>
        Les prix indiqués sur le devis sont fermes (TVA non applicable, art. 293 B du CGI). Sauf accord
        contraire, un acompte de 30 à 50 % est demandé à la commande, le solde étant dû à la livraison.
        Paiement par virement bancaire.
      </p>

      <h2>Article 4 — Délais</h2>
      <p>
        Les délais communiqués sont indicatifs et dépendent de la complexité du projet. Un dépassement
        raisonnable ne peut donner lieu à pénalité, sauf accord contraire écrit entre les parties.
      </p>

      <h2>Article 5 — Garantie et maintenance</h2>
      <p>
        Chaque livraison inclut une garantie de 30 jours calendaires à compter de la mise en production,
        couvrant la correction gratuite des anomalies et bugs bloquants constatés sur le périmètre livré.
        Cette garantie ne couvre pas les évolutions fonctionnelles, les changements de périmètre, ni les
        dysfonctionnements liés à une intervention d'un tiers. Au-delà de cette période, un contrat de
        maintenance optionnel peut être proposé.
      </p>

      <h2>Article 6 — Propriété intellectuelle</h2>
      <p>
        Les livrables développés spécifiquement pour le client (code source, automatisations) lui sont cédés
        en pleine propriété à réception du paiement intégral, à l'exception des composants tiers et
        bibliothèques open source soumis à leurs propres licences.
      </p>

      <h2>Article 7 — Confidentialité</h2>
      <p>
        Les parties s'engagent à conserver confidentielles toutes les informations échangées dans le cadre de
        la mission. Un accord de confidentialité (NDA) peut être signé sur demande avant tout échange de
        documents.
      </p>

      <h2>Article 8 — Responsabilité</h2>
      <p>
        La responsabilité de Ouakan Solutions est limitée aux dommages directs et prévisibles, dans la limite
        du montant effectivement perçu pour la prestation concernée.
      </p>

      <h2>Article 9 — Résiliation</h2>
      <p>
        Le client peut résilier la mission par écrit à tout moment, moyennant le paiement des prestations déjà
        réalisées.
      </p>

      <h2>Article 10 — Droit applicable et juridiction</h2>
      <p>
        Les présentes CGV sont soumises au droit français. À défaut de résolution amiable, tout litige entre
        professionnels relève de la compétence exclusive du Tribunal judiciaire du Havre.
      </p>
    </LegalLayout>
  );
}

export function Cookies() {
  return (
    <LegalLayout title="Politique de cookies">
      <h2>Qu'est-ce qu'un cookie ?</h2>
      <p>
        Un cookie est un petit fichier déposé sur votre appareil lors de la visite d'un site, permettant de
        conserver certaines informations (préférences, mesure d'audience...).
      </p>

      <h2>Cookies utilisés sur ce site</h2>
      <ul>
        <li>
          <b>Google Analytics</b> — mesure d'audience anonymisée, déposée uniquement après votre consentement
          explicite via la bannière affichée lors de votre première visite.
        </li>
      </ul>
      <p>
        Les polices de caractères de ce site sont auto-hébergées et ne déposent aucun cookie ni requête vers
        un serveur tiers.
      </p>

      <h2>Gérer votre consentement</h2>
      <p>
        Vous pouvez modifier votre choix à tout moment via le lien « Gérer les cookies » présent en bas de
        chaque page du site. Votre choix est conservé pendant 6 mois, après quoi il vous sera à nouveau
        demandé.
      </p>
    </LegalLayout>
  );
}
